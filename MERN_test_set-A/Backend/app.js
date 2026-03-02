const express = require('express')
const session = require('express-session');
const cors = require('cors');
const connectdb = require('./config/db');
const routes= require('./routes/movieroutes');
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/movie',routes)
app.listen(5000, () => {
    console.log('server is running....');

})

