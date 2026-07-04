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
        "DELETE FROM student WHERE student_id = 101;",
        function(err, result) {
            if (err) throw err;
            console.log("Deleted from student table");
            console.log(result);
        }
    );

    connection.query(
        "DELETE FROM department WHERE dept_id = 1;",
        function(err, result) {
            if (err) throw err;
            console.log("Deleted from department table");
            console.log(result);
        }
    );

    connection.query(
        "DELETE FROM staff WHERE staff_id = 201;",
        function(err, result) {
            if (err) throw err;
            console.log("Deleted from staff table");
            console.log(result);
            connection.end();
        }
    );
});

module.exports = connection;