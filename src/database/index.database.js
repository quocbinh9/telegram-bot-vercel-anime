const { DataSource } = require("typeorm");
const movieEntity = require("../entities/movie.entity");
const { postgresUrl } = require("../config/app.config");

const AppDataSource = new DataSource({
  type: "postgres",
  url: postgresUrl,
  logging: false,
  synchronize: true,
  entities: [
    movieEntity
  ]
});

const createConnection = () => {
  return new Promise((resolve, reject) => {
    AppDataSource.initialize()
      .then(connection => resolve(connection))
      .catch(error => reject(error))
  })
}

module.exports = createConnection