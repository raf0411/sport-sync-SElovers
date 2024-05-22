import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "OTWSE100",
    database: "SportSync_Database"
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected!");
});