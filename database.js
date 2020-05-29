const mongoose = require('mongoose');
const dbUrl = require('./config').DB;

module.exports = function()
{
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(dbUrl)

    mongoose.connection.on('connected', function() {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', function(err) {
        console.log('Error connecting to MongoDB ', err);
    });

    mongoose.connection.on('diconnected', function() {
        console.log('Disconnected from database.');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Manually disconnecting from database');
            process.exit(0);
        });
    });
}