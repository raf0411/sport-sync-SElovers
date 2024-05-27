import express from "express";
import { getUser } from "../controller/user.js";

const router = express.Router()

//TODO

router.get("/find/:userId", getUser);

export default router