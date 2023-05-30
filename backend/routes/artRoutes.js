const express = require('express')
const router = express.Router()
const { getRandomSymbol } = require('../controllers/artController')

router.get('/symbol', getRandomSymbol)

module.exports = router