const express = require('express');
const argon2 = require('argon2');
const port = require('./config').PORT;
require('dotenv').config();
const cors = require('cors');

// import models
const Products = require('./api/product/product.dao');
const Users = require('./api/user/user.dao');

// import router generator function
const routerGen = require('./api/routes');


const db = require('./database');
const server = express();

server.use(express.json());
server.use(cors());

// pull in the database and run it
db();

server.use('/', routerGen(Products));
server.use('/', routerGen(Users));

//login route
server.post('/login', (req, res, next) =>
{
    const {email, password} = req.body;
    if (typeof email === 'undefined' || typeof password === 'undefined')
    {
        console.log('could not find password in body');
        console.log('body:', req.body);
        return res.status(400).send('Invalid email or password.');
    }
    Users.get({email}, async (err, result) =>
    {
        if(err)
        {
            console.log('Error getting user: ', err);
            return res.status(400).send('Invalid email or password.');
        }
        if (result.length === 0)
        {
            return res.status(401).send('Invalid username or password');
        }
        const user = result[0];
        try {
            if (await argon2.verify(user.password, password)) {
                // password match
                // remove password prop from user
                delete user.password;
                res.status(200).json({...user, jwt:''} );
            } else {
                // password did not match
                return res.status(401).send('Invalid username or password');
            } 
        } catch (err) {
            // internal error
            console.log('No way man: ', err);
        }
    })
})

server.listen(port, (err) =>
{
    if(err)
    {
        console.log(`Error listening on port ${port}`);
    }
    console.log(`Server up and running on port ${port}`);
})