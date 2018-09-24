const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

router.get('/', function(req, res, next) {
    knex('beaches').select().then(beachlist => {
        res.render('/partials/list', { beachlist: beachlist });
    });
});

module.exports - router;