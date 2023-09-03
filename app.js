//app.js
const express = require("express");
const app = express();
require('dotenv').config({path:'./config.env'})
const notFoundMiddleware = require('./middlewares/not-found')
const globalHandlingMiddleware = require('./middlewares/errorHandler')
const userRouter = require('./routes/userRoutes')
require('./db/database')


app.use(express.json())
app.get('/', (req, res)=>{
    res.json({msg:"hello"})
})
app.use('/api/user' , userRouter)
app.use(notFoundMiddleware)
app.use(globalHandlingMiddleware)


module.exports = app