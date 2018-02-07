/*jslint node: true, nomen: true */
'use strict';

var mysql = require('mysql');
var pg = require('pg');
var JSONB = require('json-buffer');
var concat = require('concat-stream');


/**
 * The response function
 * @param {object} data Object containing the response
 */
var respond = function (data) {
    process.stdout.write(JSONB.stringify(data), function () {
        process.exit(0);
    });
};

/**
 * Execute postresql query
 * @param   {object} connectionInfo Object containing information about the connection
 * @param   {string} query          The query to execute
 * @param   {Array}  params         Params to use in the query
 * @returns {mixed}  Void
 */
var fnPgsql = function (connectionInfo, query, params) {
    var connection,
        client = new pg.Client(connectionInfo);

    client.connect(function (err) {
        if (err) {
            return respond({
                success: false,
                data: {
                    err: err,
                    query: query,
                    connection: connectionInfo
                }
            });
        }

        // execute a query on our database
        client.query(query, params, function (err, result) {
            // close the client
            client.end();

            // treat the error
            if (err) {
                return respond({
                    success: false,
                    data: {
                        err: err,
                        query: query,
                        connection: connectionInfo
                    }
                });
            }
            
            // Return the respose
            return respond({
                success: true,
                data: result
            });
        });
    });
};

/**
 * Execute mysql query
 * @param   {object} connectionInfo Object containing information about the connection
 * @param   {string} query          The query to execute
 * @param   {Array}  params         Params to use in the query
 * @returns {mixed}  Void
 */
var fnMysql = function (connectionInfo, query, params) {
    var connection;

    // Connection validation
    if (typeof connectionInfo.host !== 'string' || connectionInfo.host.length === 0) {
        return respond({
            success: false,
            data: {
                err: 'Bad hostname provided.',
                query: query,
                connection: connectionInfo
            }
        });
    }
    if (typeof connectionInfo.user !== 'string' || connectionInfo.user.length === 0) {
        return respond({
            success: false,
            data: {
                err: 'Bad username provided.',
                query: query,
                connection: connectionInfo
            }
        });
    }

    if (typeof connectionInfo.password !== 'string') {
        return respond({
            success: false,
            data: {
                err: 'Bad password provided.',
                query: query,
                connection: connectionInfo
            }
        });
    }
    if (typeof connectionInfo.database !== 'string' || connectionInfo.database.length === 0) {
        return respond({
            success: false,
            data: {
                err: 'Bad database provided.',
                query: query,
                connection: connectionInfo
            }
        });
    }


    // Return if no sql query specified
    if (query.length === 0) {
        return respond({
            success: false,
            data: {
                err: 'No SQL query specified.'
            }
        });
    }

    // Create the connection to the database
    connection = mysql.createConnection(connectionInfo);

    // Connect to the database
    connection.connect();

    // Do the query
    connection.query(query, params, function (err, rows, fields) {
        // End the connection
        connection.end();

        // Return the error and stop
        if (err) {
            return respond({
                success: false,
                data: {
                    err: err,
                    query: query,
                    connection: connectionInfo
                }

            });
        }

        // Do the callback
        respond({
            success: true,
            data: {
                rows: rows,
                fields: fields
            }
        });
    });
};

/*
 * Create the piped request
 */
process.stdin.pipe(concat(function (stdin) {
    var req = JSONB.parse(stdin.toString()),
        query = req.query,
        params = req.params,
        connectionInfo = {
            host: req.connection.host,
            user: req.connection.user,
            password: req.connection.password,
            database: req.connection.database,
            port: req.connection.port || 3306
        },
        connection;

    switch (req.type) {
    case 'postgres':
        fnPgsql.call(this, req.connection, req.query, req.params);
        break;
    case 'mysql':
        fnMysql.call(this, req.connection, req.query, req.params);
        break;
    default:
        respond({
            success: false,
            data: {
                err: 'Unknown database wanted.',
                request: req
            }
        });
    }

}));