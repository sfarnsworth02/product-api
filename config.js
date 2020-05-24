
require('dotenv').config();

module.exports = {
    PORT: 5000,
    DB: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@contactsapp-z9t9p.mongodb.net/test?retryWrites=true&w=majority`
}