const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../product/product.model')

/*
    num,
    name,
    pcsa,
    products,
*/

const partnerSchema = new Schema({
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
    },
})

module.exports = partnerSchema;