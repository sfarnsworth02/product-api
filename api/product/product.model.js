const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
{ 
    "shortSku": ,
    "fullSku": "",
    "skuName": "",
    "skuDesc": "",
    "category": "",
    "catTag": [""],
    "largeImg": "",
    "fullImg": [""],
    "partner": {
    	"num": ,
    	"name":""
    },
    "status": {
    	"status": "prop"
        "reqDate": ,
        "recDate": ,
        "status":,
        "condition": "",
        "notes":[""],
        "purgeDate":
    }
},
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
        unique: true,
    },
    skuName: {
        type: String,
        required: true,
        unique: false,
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
    catTag: {
        type: Array,
        required: false,
        unique: false,
    },
    fullImg: {
        type: Array,
        required: false,
        unique: false,
    }, 
    largeImg: {
        type: String,
        required: false,
        unique: false,
    },
    partner: {
        num: {
            type: Number,
            required: true,
            unique: false,
        },
        name: {
            type: String,
            required: true,
            unique: false,
        },
        pcsa: {
            type: String,
            required: false,
            unique: false,
        },
    },
    status: {
        reqDate: {
            type: Date,
            required: false,
            unique: false,
        },
        recDate: {
            type: Date,
            required: false,
            unique: false,
        },
        condition: {
            type: String,
            required: false,
            unique: false,
        },
        status: {
            type: String,
            required: false,
            unique: false,
        },
        notes: {
            type: Array,
            required: false,
            unique: false,
        },
        purgeDate: {
            type: Date,
            required: false,
            unique: false,
        }
    }
})

module.exports = productSchema;