const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
shortSku,
fullSku,
skuName,
skuDesc, 
category,
fullImg, 
largeImg,
partner,
status,
*/

const productSchema = new Schema({
    shortSku: {
        type: Number,
        required: true,
        unique: false,
    },
    fullSku: {
        type: String,
        required: true,
        unique:true
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
        type: Schema.Types.ObjectId,
        unique: false,
        required: true,
        ref: "Partner",
    },
    status: {
        reqDate: {
            type: Date,

        },
    }
})

module.exports = productSchema;