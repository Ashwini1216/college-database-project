require('dotenv').config();
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD
});

connection.connect(function(err) {
    if (err) throw err;

    connection.query("CREATE DATABASE IF NOT EXISTS COLLEGE;", function(err, result) {
        if (err) throw err;
        console.log("Database COLLEGE created successfully");
        console.log(result);
        connection.end();
    });
});

module.exports = connection;