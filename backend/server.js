const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000
const app = express()

var jsonParser = bodyParser.json()

connectDB()

// API routes
app.use('/api/art', jsonParser, require('./routes/artRoutes'))
app.use('/api/word', jsonParser, require('./routes/wordRoutes'))

// Serve frontend
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}

app.listen(port, () => console.log(`Server started on port ${port}`))