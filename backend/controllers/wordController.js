const asyncHandler = require('express-async-handler')
const Word = require('../models/wordModel')

// @route GET /api/word/
const getRandomWord = asyncHandler(async(req, res) => {
    // Get one random word from the collection, along with a list of the words in randomized order
    const word = await Word.aggregate(
        [ { $sample: { size: 1 } } ]
    )

    var word_obj = word[0]

    var word_list = [word_obj.english_word, word_obj.word1, word_obj.word2, word_obj.word3]
    shuffle(word_list)

    word_obj.word_list = word_list

    res.status(200).json(word)
})

// Takes a list of strings and shuffles the order
function shuffle(word_list) {
    var swap, temp;

    for (let i = word_list.length - 1; i > 0; i--) {
        swap = Math.floor(Math.random() * (i+1))
        temp = word_list[i]
        word_list[i] = word_list[swap]
        word_list[swap] = temp
    }
}

module.exports = {
    getRandomWord,
}