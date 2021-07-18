const express = require('express')
const app = new express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine', 'ejs')
const fileSyst = require('fs')
const appName = 'RESTAURANT'

console.log('satrt')
app.get('/', (req, res) => {
    // res.send('index')
    res.render('index', { myPageTitle: `${appName}|HOME` })
})
app.get('/contact', (req, res) => {
    // res.send('index')
    res.render('contact', { myPageTitle: `${appName}|CONTACT` })
})
app.get('/events', (req, res) => {
    // res.send('index')
    res.render('events', { myPageTitle: `${appName}|EVENTS` })
})
app.get('/feedback', (req, res) => {
    // res.send('index')
    res.render('feedback', { myPageTitle: `${appName}|FEEDBACK` })
})
app.get('/menu', (req, res) => {
    // res.send('index')
    res.render('menu', { myPageTitle: `${appName}|MENU` })
})
app.get('/team', (req, res) => {
    // res.send('index')
    res.render('team', { myPageTitle: `${appName}|TEAM` })
})
app.get('/galerie', (req, res) => {
    // res.send('index')
    res.render('galerie', { myPageTitle: `${appName}|GALERIE` })
})
app.get('/booking', (req, res) => {
    // res.send('index')
    res.render('booking', { myPageTitle: `${appName}|BOOKING` })
})
app.use(function (req, res, next) {
    res.status(404).render('404');
});

app.listen(PORT, () => { console.log(`listening to http://localhost:${PORT}`) })