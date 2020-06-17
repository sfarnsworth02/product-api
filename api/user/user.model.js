const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    displayName: {
        type: String,
        required: false,
        unique: false,
    },
    displayPreference: {
        type: String,
        required: false,
        unique: false,
    },
}, {
    timestamps: true
});

module.exports = userSchema;