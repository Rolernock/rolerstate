import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import messageRoutes from './routes/messageRoutes.js'
import ConnectDB from './config/db.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()

//Parse incoming request with json
app.use(express.json())

//Routes
app.use('/api/message', messageRoutes)

//Resolve __dirname in ES_Module
const __dirname = path.resolve()

//use client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

//Connect DB
ConnectDB()
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
