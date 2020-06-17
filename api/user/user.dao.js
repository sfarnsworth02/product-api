const mongoose = require('mongoose');
const argon2 = require('argon2');
const schema = require('./user.model');

async function passhash (pwd)
{
    try {
        console.log('pwd: ', pwd)
        const hash = await argon2.hash(pwd);
       return hash;
    } catch (err) {
        console.log('Error updating user password: ', err);
    }
}

schema.statics = {
    create: async function(data, callback)
    {
        data.password = await passhash(data.password);
        const document = new this(data);
        document.save(callback);
    },
    get: function(query, callback)
    {
        return this.find(query, callback);
    },
    update: async function(query, data, callback)
    {
        data.password = await passhash(data.password);
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback) {
        this.findOneAndDelete(query, callback);
    },
}

const model = mongoose.model('users', schema);
module.exports = model;