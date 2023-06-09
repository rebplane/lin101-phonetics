const mongoose = require('mongoose')

const syllableSchema = mongoose.Schema({
    english_word: {
        type: String,
        required: true
    },
    ipa_transcription: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Syllable', syllableSchema)