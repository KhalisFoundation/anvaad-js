/*jslint node: true, nomen: true */
'use strict';

var syncSql = require('../').mysql;
var dotenv = require('dotenv');

// Load the .env file
dotenv.config();

var output = syncSql(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT
    },
    process.env.MYSQL_SQL
);

console.log(JSON.stringify(output));