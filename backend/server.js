import express from "express";
import 'dotenv/config'
import authRouter from './routes/auth-router.js'
import connectDB from "./utils/database.js";
import cookieParser from "cookie-parser";
import blogRouter from "./routes/blog-router.js"
import cors from "cors";

const app = express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(cookieParser())

app.use(express.json())

app.use("/api/auth/", authRouter)

app.use("/api/", blogRouter)

connectDB().then(() => {
   
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
}
)