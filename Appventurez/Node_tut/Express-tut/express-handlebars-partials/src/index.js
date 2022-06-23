const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const hbs = require('hbs');
// const index =  require('../templates/views/index.hbs')
//Absolute path
// console.log(__dirname)
const staticPath =  path.join(__dirname, '../public')
const templatePath =  path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials') 
// to set the view engine
app.set('viwe engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath)


// app.use(express.static(staticPath));
// template engine root

app.get("/",(req, res) => {
res.render('index.hbs')
})
app.get("/about",(req, res) => {
    res.render('about.hbs')
    })
    


// built-in Middleware
// app.use(express.static(staticPath));

app.get('/', (req, res) => {

    res.send('Hello World!')
}) 
app.get('/about', (req, res) => {

    res.status(200).send('You are now Aboutt Page')
})



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})