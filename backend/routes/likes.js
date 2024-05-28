import express from "express";
import { getLikes, addLike, deleteLike } from "../controller/likes.js";

const router = express.Router()

//TODO

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);

export default router