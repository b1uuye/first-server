const express = require('express')
const cors = require('cors')
const app = express()

const logger = require('./logger')
const { fruitsRouter } = require('./routes/fruits')


app.use(express.json()) //passes json so we can use it in our server side code
app.use(cors())
app.use(logger)
app
app.use('/fruits' , fruitsRouter)

module.exports = {
    app
}