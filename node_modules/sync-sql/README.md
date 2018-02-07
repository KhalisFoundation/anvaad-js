# sync-sql

**sync-sql** is designed to make synchronous queries to the database. It has been developed as a tool to help [nightwatch.js](http://nightwatchjs.org/) tests - or other such tools - connect directly to an sql database.

## Important note

**!!!** You should **not be using** this in a production evironment. Node.js is designed to be asynchronous, therefore running sync queries on the database will seriously impact performance and stability.

## Install

```
npm install sync-sql
```

For using the latest version with bug fixes, try the command:

```
npm install cristidraghici/sync-sql
```

## Example usage with mysql

```js
var syncSql = require('sync-sql');

var output = syncSql.mysql(
	{
		host: 'localhost',
		user: 'user',
		pass: 'password',
		database: 'database',
		port: '3306'
	},
	"select * from users"
);

console.log(JSON.stringify(output));
```

## Testing

- please edit the *.env.example* with database information and the sql to test and save the file as *.env*;
- run `npm install`;
- run `npm run test-mysql`;
- run `npm run test-pg`;
- run `npm run test`.

## Workflow

Internally, this uses a separate worker process that is run using [childProcess.spawnSync](http://nodejs.org/docs/v0.11.13/api/child_process.html#child_process_child_process_spawnsync_command_args_options).

The worker then makes the actual query using the [mysql](https://www.npmjs.com/package/mysql) and [pg](https://www.npmjs.com/package/pg) packages.

## Thanks

Thanks to [sync-request](https://github.com/ForbesLindesay/sync-request) / [Forbes Lindesay](https://github.com/ForbesLindesay) for providing the base knowledge for this package.

## License

MIT
