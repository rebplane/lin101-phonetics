const express = require('express')
const router = express.Router()
const { getRandomSymbol, getSymbolAnswer} = require('../controllers/artController')

router.get('/symbol', getRandomSymbol)

router.get('/symbolanswer/:id', getSymbolAnswer)

module.exports = router