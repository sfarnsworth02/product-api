// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const requestSchema = new Schema({
//     reqName: {
//         type: String,
//         required: false,
//         unique: false,
//     },
//     reqType: {
//         // this will be partner, shot, purge
//         type: String,
//         required: true,
//         unique: false,
//     },
//     reqStatus: {
//         // this product is not in the studio yet but is to be requested
//        isRequested: {},
//     },
//      propStatus: {
//          // this product has been received
//        isProp: {},
//     },
//      purgeStatus: {
//          // this product has been selected for liquidation
//        toPurge: {},
//     },
//      productsArray: [{
//          // products listed in the request
//     }],
//      shotsArray: [{
//          // products listed in the request
//     }],
// }, {
//     timestamps: true
// })

// module.exports = studioSchema;