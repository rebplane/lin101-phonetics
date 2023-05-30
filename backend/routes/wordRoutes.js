const express = require('express')
const router = express.Router()
const { getRandomWord } = require('../controllers/wordController')

router.get('/', getRandomWord)

module.exports = router