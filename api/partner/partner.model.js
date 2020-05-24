const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    num: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    pcsa: {
        type: Boolean,
    }
})

module.exports = productSchema;