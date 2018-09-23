exports.up = function(knex, Promise) {
  return knex.schema.table('beaches', function(table) {
    table.string('beach_description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('beaches', function(table) {
    table.dropColumn('beach_description');
  });
};
