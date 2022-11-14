// Update with your config settings.
// require("dotenv").config({
//   path: "../.env.local",
// })
const env_local = require("../env.local");

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       database: process.env.DB_NAME,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     // migrations: {
//     //   tableName: 'knex_migrations'
//     // }
//     migrations: {
//       directory: "./migrations",
//       // tableName: 'knex_migrations',
//     },
//     seeds: {
//       directory: "./seeds",
//     }
//   }
// };
// console.log("process.env.DB_NAME", env_local.DB_NAME);

module.exports = {
  client: "postgresql",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    // database: process.env.DB_NAME,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    database: env_local.DB_NAME,
    user: env_local.DB_USER,
    password: env_local.DB_PASSWORD
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
