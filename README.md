# 🎓 College Database Management using Node.js and MySQL

A simple **Node.js + MySQL** project that demonstrates basic **database operations** using separate JavaScript files. This project creates a **College** database, creates tables, inserts records, displays data, and deletes selected records.

It is useful for learning how to connect **Node.js** with **MySQL** and perform basic database operations in a structured way.

---

## 📌 Project Overview

This project is divided into separate files for each database operation:

* **creation.js** → Creates the database
* **dbtable_creation.js** → Creates the tables
* **data_insertion.js** → Inserts records into the tables
* **datadisplay.js** → Displays all table data
* **delete_data.js** → Deletes selected records from the tables

---

## 🛠 Technologies Used

* **Node.js**
* **MySQL**
* **mysql2**

---

## 📂 Database Name

**COLLEGE**

---

## 📋 Tables Used

### 1. student

Stores student details:

* `student_id`
* `student_name`
* `course`

### 2. department

Stores department details:

* `dept_id`
* `dept_name`
* `hod_name`

### 3. staff

Stores staff details:

* `staff_id`
* `staff_name`
* `role`

---

## 📁 Project Files

### `creation.js`

Creates the **COLLEGE** database.

### `dbtable_creation.js`

Creates the following tables inside the **COLLEGE** database:

* `student`
* `department`
* `staff`

### `data_insertion.js`

Inserts sample records into all three tables.

### `datadisplay.js`

Displays all records from:

* `student`
* `department`
* `staff`

### `delete_data.js`

Deletes selected records from each table.

---


## Environment Variables

Create a `.env` file in the root folder and add:

DB_PASSWORD=your_mysql_password

## ▶️ Execution Order

Run the files in the following order:

```bash id="if5snn"
node creation.js
node dbtable_creation.js
node data_insertion.js
node datadisplay.js
node delete_data.js
```

---

## ⚙️ MySQL Connection Setup

Store your MySQL password in a `.env` file instead of writing it directly in the code.

Example connection setup:

```js
require('dotenv').config();
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'college'
});

## 📌 Features

* Creates a database using Node.js
* Creates multiple tables in MySQL
* Inserts records into the tables
* Displays stored records
* Deletes selected records
* Demonstrates MySQL operations using separate files

---

## 📦 Installation

Install the required package before running the project:

```bash id="f4rypm"
npm install mysql2
```

---

## 📚 Learning Outcome

This project helps in understanding:

* MySQL connection in Node.js
* Database creation using JavaScript
* Table creation using SQL queries
* Data insertion, display, and deletion
* Organizing MySQL operations into multiple files

---

## ✅ Conclusion

This project is a beginner-friendly mini project to practice **MySQL with Node.js**. It demonstrates how to create a database, create tables, insert data, display data, and delete records using separate JavaScript files.

## Author

**Ashwini S**