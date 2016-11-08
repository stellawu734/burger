var mysql = require('mysql');
var localConnection = "mysql://root:fddx658@localhost:3306/burgers_db";
var dbConnection = process.env.JAWSDB_URL || localConnection;
var connection = mysql.createConnection(dbConnection);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;