const express = require('express')
const app = express();
const bp = require('body-parser')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.use(bp.urlencoded({ extended: true }))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// get home page
app.get('/', (req, res) => {
    res.render('index');
})

//get login page
app.get('/login', (req, res) => {
    res.render('login');
})

//get beach detail page
app.get('/beach_detail', (req, res) => {
    res.render('beach_detail');

})

//get life guard page
app.get('/lifeguard', (req, res) => {
    res.render('lifeguard');

})
app.post('/lifeguard', (req, res) => {
    res.redirect('/lifeguard');
})

app.post('/beach_detail', (req, res) => {
    res.redirect('/beach_detail');
})

app.get('/index', (req, res) => {
    res.render('index');

})


app.listen(PORT, () => {
    console.log(`Started app on port: ${PORT}`);
})