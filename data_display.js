require('dotenv').config();
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'college'
});

connection.connect(function(err) {
    if (err) throw err;

    connection.query("SELECT * FROM student;", function(err, result) {
        if (err) throw err;
        console.log("Student Table:");
        console.log(result);
    });

    connection.query("SELECT * FROM department;", function(err, result) {
        if (err) throw err;
        console.log("Department Table:");
        console.log(result);
    });

    connection.query("SELECT * FROM staff;", function(err, result) {
        if (err) throw err;
        console.log("Staff Table:");
        console.log(result);
        connection.end();
    });
});

module.exports = connection;