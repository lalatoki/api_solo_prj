exports.up = function(db) {
  return db.schema.createTable("employee", table => {
    table.increments("id").primary();
    table.string('first_name', 32).notNullable();
    table.string('last_name', 32).notNullable();
    table.string('department', 64);
    table.string('position', 1).notNullable;
    table.date('start_date').notNullable;
    table.date('end_date');
    table.timestamps(true, true);
  })
};

exports.down = function(db) {
  return db.schema.dropTable("employee");
};
