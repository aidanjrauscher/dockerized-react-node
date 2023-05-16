import express from "express"
import cors from "cors"

const app = express()
const HOST = process.env.BACKEND_HOST
const PORT = process.env.BACKEND_PORT

app.use(cors({
    origin: `http://${process.env.FRONTEND_HOST}:${process.env.FRONTEND_PORT}`
}))

app.get('/max/:num', (req, res) => {
    const max = req.params.num
    const num = Math.floor(Math.random() * max)
    res.status(200).json({ num })
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server listening on http://${HOST}:${PORT}`)
})
