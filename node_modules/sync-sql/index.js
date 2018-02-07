/*jslint node: true, nomen: true */
'use strict';

var spawnSync = require('child_process').spawnSync;
var JSONB = require('json-buffer');
var fs = require('fs');

/**
 * Execute the query on the mysql database
 * @throws  {Error}  Errors thrown while executing
 * @param   {string} query      The query to execute
 * @param   {object} connection Connection information: host, user, pass, database, port (optional)
 * @returns {object} Object containing the response
 */
module.exports.mysql = function (connection, query, params) {
	var req,
		res;
	
	if (!spawnSync) {
		throw new Error('Node version must be >= 0.12');
	}

	req = JSONB.stringify({
        type: 'mysql',
		connection: connection,
		query: query || '',
		params: params || []
	});

	res = spawnSync(process.execPath, [require.resolve('./lib/worker.js')], {
		input: req
	});

	// Error handling on the process itself
	if (res.status !== 0) {
		throw new Error(res.stderr.toString());
	}

	if (res.error) {
		if (typeof res.error === 'string') {
			res.error = new Error(res.error);
		}

		throw res.error;
	}

	// get the response
	return JSONB.parse(res.stdout);
};

/**
 * Execute the query on the postgres database
 * @throws  {Error}  Errors thrown while executing
 * @param   {string} query      The query to execute
 * @param   {object} connection Connection information: host, user, pass, database, port (optional)
 * @returns {object} Object containing the response
 */
module.exports.pgsql = function (connection, query, params) {
	var req,
		res;
	
	if (!spawnSync) {
		throw new Error('Node version must be >= 0.12');
	}

	req = JSONB.stringify({
        type: 'postgres',
		connection: connection,
		query: query || '',
		params: params || []
	});

	res = spawnSync(process.execPath, [require.resolve('./lib/worker.js')], {
		input: req
	});

	// Error handling on the process itself
	if (res.status !== 0) {
		throw new Error(res.stderr.toString());
	}

	if (res.error) {
		if (typeof res.error === 'string') {
			res.error = new Error(res.error);
		}

		throw res.error;
	}

	// get the response
	return JSONB.parse(res.stdout);
};
// Postgres aliases
module.exports.pg = module.exports.postgres = module.exports.pgsql;