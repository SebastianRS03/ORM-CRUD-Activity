const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"MariaDB7539512486",
    database:"example"
});



db.getConnection(()=>{
    console.log("Connection to the database succesfully")
});


module.exports = db;