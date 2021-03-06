const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const connectWithDb = require('./config/database')

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

connectWithDb()

const path = require('path')
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config({ path: 'backend/config/config.env' })
// }
/// Using Middlewares
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser())

// Importing Routes
const post = require('./routes/postRoutes')
const user = require('./routes/userRoutes')

// Using Routes
app.use('/api/v1', post)
app.use('/api/v1', user)

app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'it deployed' })
  })
// app.use(express.static(path.join(__dirname, '../frontend/build')))

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
// })

module.exports = app
