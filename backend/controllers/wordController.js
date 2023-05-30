const asyncHandler = require('express-async-handler')
const Word = require('../models/wordModel')

// @route GET /api/symbol
const getRandomWord = asyncHandler(async(req, res) => {
    // Get one random document from the collection
    const word = await Word.aggregate(
        [ { $sample: { size: 1 } } ]
     )

    res.status(200).json(word)
})

module.exports = {
    getRandomWord,
}