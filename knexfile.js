require('dotenv').config();

connection = {
  production: {
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING + "?sslmode=require",
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_DB_HOST,
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};

if (process.env.environment === 'production') {
  module.exports = connection.production;
} else {
  module.exports = connection.development;
}