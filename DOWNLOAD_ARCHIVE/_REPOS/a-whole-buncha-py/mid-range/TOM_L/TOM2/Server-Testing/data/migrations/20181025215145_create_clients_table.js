exports.up = function(knex, Promise) {
  return knex.schema.createTable("clients", function(table) {
    table.increments();

    table.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clients");
};
