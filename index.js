const express = require('express')
const app = new express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine', 'ejs')
const fileSyst = require('fs')

console.log('satrt')
app.get('/', (req, res) => {
    // res.send('index')
    res.render('index')
})

app.listen(PORT, () => { console.log(`listening to http://localhost:${PORT}`) })