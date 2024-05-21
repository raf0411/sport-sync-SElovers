import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json())
app.use("/backend/auth", authRoutes)
app.use("/backend/user", userRoutes)
app.use("/backend/post", postRoutes)

app.listen(8800, ()=>{
    console.log("connected!")
})
