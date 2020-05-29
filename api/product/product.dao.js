const mongoose = require('mongoose');
const schema = require('./product.model');

schema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback);
    },
    get: function(query, callback)
    {
        return this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback) {
        this.findOneAndDelete(query, callback);
    },
}

const model = mongoose.model('products', schema);
module.exports = model;