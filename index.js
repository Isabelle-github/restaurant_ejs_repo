const express = require('express')
const app = new express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine', 'ejs')
const fileSyst = require('fs')
const appName = 'RESTAURANT'
const nodemailer = require('nodemailer')
const { body, validationResult } = require('express-validator');
//in order to post you need these two things always
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const menuList = require('./data.json')




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
    res.render('menu', { myPageTitle: `${appName}|MENU`, menus: `${menuList}` })
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


//Middleware zwsch req und res. die fction wird dazwischen ausgeführt
// app.use((req, res, next) => {
//     console.log('my Middleware')
//     //am Ende next erforderlich
//     next();
// })

app.post('/contactform', (req, res) => {
    console.log(req.body)
    res.send('bye')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ixavierayix@gmail.com',
            pass: ''
        }
    })
    //email message option
    const mailOptions = {
        from: 'ixavierayix@gmail.com',
        to: 'avia16@gmx.de',
        subject: 'Hello noedemailer hier',
        text: 'It works Isabellaa',
        // html: `<h2>${req.body.NameUser} sent you an EMail.</h2>
        // <p> The message is: <br>${req.body.MessageUser}</p>
        // <p> <a href="mailto:${req.body.EmailUser}">Email hier to answer</a><p/>
        // <p> <a href="tel:${req.body.PhoneUser}">Phone hier to answer</a><p/>`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            console.log('Email sent:' + info.response)
            res.end()
        }
    })

})

app.use(function (req, res, next) {
    res.status(404).render('404');
});

app.listen(PORT, () => { console.log(`listening to http://localhost:${PORT}`) })