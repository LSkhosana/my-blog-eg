import express from "express"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)

// app.get("/test", (req,res)=>{
//     res.json("It works")
// })

app.listen(8800,()=>{
    console.log("Connected!")
})