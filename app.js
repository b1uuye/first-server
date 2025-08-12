const express = require('express')
const app = express()

app.use(express.json()) //passes json so we can use it in our server side code

const logger = require('./logger')
const { fruitsRouter } = require('./routes/fruits')

app.use(logger)
app.use('/fruits' , fruitsRouter)

module.exports = {
    app
}