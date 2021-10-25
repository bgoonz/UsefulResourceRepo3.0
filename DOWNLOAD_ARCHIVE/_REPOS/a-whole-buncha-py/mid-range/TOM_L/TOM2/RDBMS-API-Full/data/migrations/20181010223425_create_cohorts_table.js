exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", function(table) {
    table.increments();

    table
      .string("name", 256)
      .notNullable()
      .unique("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cohorts");
};
