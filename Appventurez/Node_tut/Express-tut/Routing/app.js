const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {

    res.send('Hello World!')
})
app.get('/about', (req, res) => {

    res.status(200).send('You are now About Page')
})
app.get('/contact', (req, res) => {

    res.status(200).send('You are now Contact Page')
})
app.get('/contact', (req, res) => {

    res.status(200).send('You are now Contact Page')
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})