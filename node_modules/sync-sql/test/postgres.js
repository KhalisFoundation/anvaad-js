/*jslint node: true, nomen: true */
'use strict';

var syncSql = require('../').pgsql;
var dotenv = require('dotenv');

// Load the .env file
dotenv.config();

var output = syncSql(
    {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: process.env.PG_DATABASE,
        port: process.env.PG_PORT
    },
    process.env.PG_SQL
);

console.log(JSON.stringify(output));