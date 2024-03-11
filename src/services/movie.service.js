const movieEntity = require("../entities/movie.entity")

const searchMovies = async (query, limit, offset) => {
  if (!global.connectionManager) return []
  const data = await global.connectionManager
    .getRepository(movieEntity)
    .createQueryBuilder('movie')
    .where("movie.name ILIKE :q", { q: `%${query.trim()}%` })
    .orWhere("movie.origin_name ILIKE :q", { q: `%${query.trim()}%` })
    .take(limit)
    .skip(offset)
    .orderBy('movie.updated_at', 'DESC')
    .getMany()

  return data.map(el => {
    return {
      ...el,
      thumb_url: `https://img.ophim12.cc/uploads/movies/${el.thumb_url}`,
    }
  })
}

module.exports = {
  searchMovies
}