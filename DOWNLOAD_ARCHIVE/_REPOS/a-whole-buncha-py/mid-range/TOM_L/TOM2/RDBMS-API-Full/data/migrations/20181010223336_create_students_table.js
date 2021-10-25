exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(table) {
    table.increments();
    table.string("name", 256).notNullable();
    table
      .integer("cohort_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("students");
};
