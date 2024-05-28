import mysql from "mysql";

export const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "soccerball99!",
    database: "sport-sync"
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });