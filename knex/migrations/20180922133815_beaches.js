exports.up = function(knex, Promise) {
  return knex.schema.createTable('beaches', function(table) {
    table.increments();
    table.string('beach_name', 1000).notNullable();
    table.string('area').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beaches');
};
