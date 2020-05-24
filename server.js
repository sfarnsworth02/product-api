const express = require('express');
const port = require('./config').PORT;
require('dotenv').config();

const db = require('./db');
const server = express();
server.use(express.json());
db();

server.listen(port, (err) =>
{
    if(err)
    {
        console.log(`Error listening on port ${port}`);
    }
    console.log(`Server up and running on port ${port}`);
})