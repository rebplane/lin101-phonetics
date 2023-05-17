const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))