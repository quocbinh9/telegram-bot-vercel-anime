const { default: axios } = require("axios")
const movieEntity = require("../entities/movie.entity")

const fetchMovies = async ({ connectionManager, query }) => {
  const lastPage = await getLastPage()
  const limit = 20

  const page = Math.ceil(lastPage / limit)
  console.log({ page });
  console.log('Crapter HAVE "' + lastPage + '" PAGE')
  // connectionManager.getRepository(movieEntity).clear()

  for (let index = 1; index <= page; index++) {
    const params = { from: ((index - 1) * limit) + 1, to: (index) * limit > lastPage ? lastPage : (index) * limit };
    console.log(params);
    console.log('PAGE: ' + index + "/" + page);
    //   let promises = []
    //   for (let index = params.from; index <= params.to; index++) {
    //     promises.push(getMovies(index))
    //   }
    //   const response = await Promise.all(promises)
    //   console.log('ITEM: ' + response.flat().length);
    //   await connectionManager.getRepository(movieEntity).save(response.flat())
    //   console.log('SAVE DATA SUCCESS')
  }
}


const getLastPage = async () => {
  const response = await axios.get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
  const { pagination } = response.data
  return pagination.totalPages
}

const getMovies = async (page = 1) => {
  try {
    const url = `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`
    console.log(`Crapter URL: ${url}`)

    const response = await axios.get(url)
    const { items } = response.data

    return items.map(el => {
      const { modified, _id, ...item } = el
      return {
        ...item,
        modified_time: modified.time,
        crapter_id: _id
      }
    })
  } catch (error) {
    return []
  }
}

const getMovieDetail = async (slug) => {
  const url = `https://ophim1.com/phim/${slug}`
  console.log(`Crapter URL: ${url}`)

  const response = await axios.get(url)
  const { movie, episodes } = response.data
  return { movie, episodes }
}

module.exports = {
  fetchMovies,
  getMovieDetail
}