const asyncHandler = require('express-async-handler')
const Syllable = require('../models/syllableModel')

// @route GET /api/word/
const getRandomSyllable = asyncHandler(async(req, res) => {
    // Get one random word from the collection, along with a list of the words in randomized order
    const syllable = await Syllable.aggregate(
        [ { $sample: { size: 1 } } ]
    )

    var syl_obj = syllable[0]
    
    syl_obj.ipa_transcription = syl_obj.ipa_transcription.replaceAll('/', '').split(".")

    // Get the stress
    for (let i = 0; i < syl_obj.ipa_transcription.length; i++) {
        if (syl_obj.ipa_transcription[i].includes('ˈ')) {
            syl_obj.stress_position = i
            syl_obj.ipa_transcription[i] = syl_obj.ipa_transcription[i].replace('ˈ', '')
            break;
        }
    }

    res.status(200).json(syl_obj)
})

module.exports = {
    getRandomSyllable,
}