const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
    english_word: {
        type: String,
        required: true
    },
    ipa_transcription: {
        type: String,
        required: true
    },
    word1: {
        type: String,
        required: true
    },
    word2: {
        type: String,
        required: true
    },
    word3: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Word', wordSchema)