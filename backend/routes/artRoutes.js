const express = require('express')
const router = express.Router()
const { getRandomSymbol, getSymbolAnswer} = require('../controllers/artController')

router.get('/symbol', getRandomSymbol)

router.get('/symbolanswer/:symbol', getSymbolAnswer)

module.exports = router