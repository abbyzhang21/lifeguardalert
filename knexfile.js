// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: {
        host : 'localhost',
        user : 'aquaman',
        password : 'sealife',
        database : 'life_alert',
        charset: 'utf8'
      },
      migrations: {
        directory: __dirname + '/knex/migrations',
      },
      seeds: {
        directory: __dirname + '/knex/seeds'
      }
    }

};
