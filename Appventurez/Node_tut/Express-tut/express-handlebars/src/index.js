const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Absolute path
// console.log(__dirname)
const staticPath =  path.join(__dirname, '../public')

// to set the view engine
app.set('viwe engine','hbs');

// template engine root

app.get("/",(req, res) => {
res.render('index.hbs')
})


// built-in Middleware
// app.use(express.static(staticPath));

app.get('/', (req, res) => {

    res.send('Hello World!')
}) 
app.get('/about', (req, res) => {

    res.status(200).send('You are now About Page')
})



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})