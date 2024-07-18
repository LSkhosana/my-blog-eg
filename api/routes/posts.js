import express from "express"
import { addPost } from "../controllers/post"

const router = express.Router()

// using this router you can make any request 
router.get("/test", addPost)

export default router