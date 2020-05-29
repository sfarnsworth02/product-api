const express = require('express');
const port = require('./config').PORT;
require('dotenv').config();

// import models
const Products = require('./api/product/product.dao');
const Partners = require('./api/partner/partner.dao');

// import router generator function
const routerGen = require('./api/routes');


const db = require('./database');
const server = express();

server.use(express.json());

// pull in the database and run it
db();

server.use('/', routerGen(Products));
server.use('/', routerGen(Partners));

server.listen(port, (err) =>
{
    if(err)
    {
        console.log(`Error listening on port ${port}`);
    }
    console.log(`Server up and running on port ${port}`);
})