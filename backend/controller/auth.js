import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{
    //check existing user
    const q = "SELECT *FROM user WHERE email = ? OR username = ? OR name = ?";
    db.query(q,[req.body.email, req.body.username, req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User alredy exist!");

        //hash the password and create a userrrr
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
export const login = (req, res) => {
    const q = "SELECT * FROM user WHERE email = ?";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      // Check password
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
  
      if (!isPasswordCorrect) return res.status(400).json("Wrong email or password!");
  
      const token = jwt.sign({ userID: data[0].userID }, "jwtkey");
      const { password, ...other } = data[0];
  
      res.cookie("access_token", token, {
        httpOnly: true
      }).status(200).json(other);
    });
  };
  
export const logout = (req, res)=>{
    
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }), status(200).json("User has been logged out")
};