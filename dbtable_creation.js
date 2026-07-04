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

    connection.query(
        "CREATE TABLE student(student_id INT, student_name VARCHAR(30), course VARCHAR(20));",
        function(err, result) {
            if (err) throw err;
            console.log("Student table created");
            console.log(result);
        }
    );

    connection.query(
        "CREATE TABLE department(dept_id INT, dept_name VARCHAR(30), hod_name VARCHAR(30));",
        function(err, result) {
            if (err) throw err;
            console.log("Department table created");
            console.log(result);
        }
    );

    connection.query(
        "CREATE TABLE staff(staff_id INT, staff_name VARCHAR(30), role VARCHAR(20));",
        function(err, result) {
            if (err) throw err;
            console.log("Staff table created");
            console.log(result);
            connection.end();
        }
    );
});

module.exports = connection;