require('dotenv').config();

module.exports = {
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING + "?sslmode=require",
  searchPath: ['knex', 'public'],
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};
