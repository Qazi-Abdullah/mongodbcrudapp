import express from 'express'
import cors from 'cors'
import path from "path"
const __dirname = path.resolve();


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'

const router = express.Router();
const app = express()
app.use(express.json())
// app.use(capp
app.use(cors());

app.use(authRouter)


router.use((req, res, next) => {
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})

app.use( commentRouter)
app.use( postRouter)
app.use( feedRouter)

app.use("/static", express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Example app server on port ${PORT}`)
})