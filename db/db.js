// const knex = require("knex");
// const knexfile = require("./knexfile");

// const db = knex(knexfile.development);
// module.exports = db;

const config = require("./knexfile");
const db = require("knex")(config);

module.exports = db;
