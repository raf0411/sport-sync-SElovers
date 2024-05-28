import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found");

        const { password, ...info } = data[0];
        return res.json(info);
    });
};

export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = "UPDATE users SET `name`=?, `username`=?, `city`=?, `country`=?, `gender`=?, `profilePic`=?, `coverPic`=?, `desc`=? WHERE id=?"
        db.query(q, [
            req.body.name,
            req.body.username,
            req.body.city,
            req.body.country,
            req.body.gender,
            req.body.profilePic,
            req.body.coverPic,
            req.body.desc, // Missing 'desc' parameter was added here
            userInfo.id
        ], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.affectedRows > 0) return res.json("Updated!");
            return res.status(403).json("You can update only your post!");
        });
    });
};
