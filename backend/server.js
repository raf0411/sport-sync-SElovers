const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : 'OTWSE100',
    database : 'SportSync_Database'

})

app.get('/', (re, res)=> {
    return res.json("from backend side");
})

app.get('/user', (req, res)=>{
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})