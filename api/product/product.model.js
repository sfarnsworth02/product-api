const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    shortSku: {
        type: Number,
        required: true,
        unique: true,
    },
    optNum: {
        type: Array,
        required: true,
    },
    skuName: {
        type: String,
        required: true,
    },
    skuDesc: {
        type: String,
        required: false,
        unique: false,
    }, 
    category: {
        type: String,
        required: false,
        unique: false,
    },
    fullImg: {
        type: String,
        required: false,
        unique: false,
    }, 
    largeImg: {
        type: String,
        required: false,
        unique: false,
    },
    partner: {
        
    }
})

module.exports = productSchema;