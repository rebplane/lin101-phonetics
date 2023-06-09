const express = require('express')
const router = express.Router()
const { getRandomSyllable } = require('../controllers/syllableController')

router.get('/', getRandomSyllable)

module.exports = router