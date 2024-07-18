import mysql from "mysql"

// Creates a connection to the MySQL database
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Lesed1skh05",
    database:"blog"
})