const pg = require("pg");

const pool = new pg.Pool({
  user: process.env.DB_POSTGRES_USER,
  host: process.env.DB_POSTGRES_HOST,
  database: process.env.DB_POSTGRES_DATABASE,
  password: process.env.DB_POSTGRES_PASSWORD,
  port: process.env.DB_POSTGRES_PORT,
});

module.exports = pool;
