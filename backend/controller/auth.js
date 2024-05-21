import {db} from "../db.js";
import bcrypt from "bcryptjs";
export const register = (req, res)=>{
    //check existing user
    const q = "SELECT *FROM user WHERE email = ? OR username = ? OR name = ?";
    db.query(q,[req.body.email, req.body.username, req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User alredy exist!");

        //hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO user(`name`, `username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.name,
            req.body.username,
            req.body.email,
            hash,

        ]

        db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
return res.status(200).json("User has been created!");
        });
    });
};
export const login = (req, res)=>{
    
};
export const logout = (req, res)=>{
    
};