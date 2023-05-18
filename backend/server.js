const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000
const app = express()

var jsonParser = bodyParser.json()

connectDB()

// API routes
app.use('/api/art', jsonParser, require('./routes/artRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))