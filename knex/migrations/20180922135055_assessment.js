exports.up = function(knex, Promise) {
  return knex.schema.createTable('assessment', function(table) {
    table.increments();
    table
      .integer('beach_id')
      .references('id')
      .inTable('beaches');
    table
      .integer('alert_id')
      .references('id')
      .inTable('alerts');
    table.integer('level');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assessment');
};
