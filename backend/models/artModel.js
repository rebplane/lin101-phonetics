const mongoose = require('mongoose')

const artSchema = mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    symbol_name: {
        type: String,
        required: false
    },
    place_of_articulation: {
        type: String,
        required: false
    },
    manner_of_articulation: {
        type: String,
        required: false
    },
    voicing: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    english: {
        type: Boolean,
        required: true
    },
    height: {
        type: String,
        required: false
    },
    backness: {
        type: String,
        required: false
    },
    rounding: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Art', artSchema)