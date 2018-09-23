exports.up = function(knex, Promise) {
    return knex.schema.table('beaches', function(table) {
      table.string('beach_image');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('beaches', function(table) {
      table.dropColumn('beach_image');
    });
  };