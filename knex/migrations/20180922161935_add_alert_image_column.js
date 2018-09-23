exports.up = function(knex, Promise) {
    return knex.schema.table('alerts', function(table) {
      table.string('alert_image');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('alerts', function(table) {
      table.dropColumn('alert_image');
    });
  };