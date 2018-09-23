const express = require('express')
const app = express();
const bp = require('body-parser')
const exphbs = require('express-handlebars')
const knex = require('./knex/knex.js');
// const lifeguard = require('./lifeguard.js')

const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.use(bp.urlencoded({ extended: true }))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// app.use('/', lifeguard)
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Started app on port: ${PORT}`);
})