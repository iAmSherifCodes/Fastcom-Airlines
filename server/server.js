/* eslint-disable no-undef */
const Router = require('./src/router/Router');
const express = require('express')
const app = express()
const cors = require('cors')
const Connectdb = require('./src/db/connect');
const NotFound = require('./src/common/malware/NotFound');

const db = 'mongodb://localhost:27017/EliteAirline'

Connectdb(db)
.then(()=>{
    console.log('Database Successfully Connected')
    app.listen('8080', ()=>{
        console.log('Application Started Successfully in Port 8080 !!!')
    })
})
.catch((error)=>{
    console.log('db error ', error)
})

app.use(
    cors()
)
app.use(express.json())
app.use('/api/v1/elite', Router)

app.get("*", (req, res) => {
    res.send('Welcome to elite airline server')
})

app.use(NotFound)
