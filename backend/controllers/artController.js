const asyncHandler = require('express-async-handler')
const Art = require('../models/artModel')

// @route GET /api/symbol
const getRandomSymbol = asyncHandler(async(req, res) => {
    // Get one random document from the collection
    const symbol = await Art.aggregate(
        [ { $sample: { size: 1 } } ]
     )

    res.status(200).json(symbol)
})

module.exports = {
    getRandomSymbol,
}