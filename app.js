const express = require('express')
const mongoose = require('mongoose')
const Users = require('./users')

const app = express()
const port = 3000

// mongo db route
const dbRoute = 'mongodb://localhost:27017/people'

mongoose.connect(
    dbRoute,
    {useNewUrlParser: true}
)

let db = mongoose.connection

// outputs successful connection
db.once('open', () => console.log('Houston, we are connected to the local database'))

// checks for connection error
db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.get('/', function(req, res) {
    res.send('Hello, World!')
})

app.get('/users', function(req, res) {
    Users.find({}, function(req, users) {
        res.send(users)
    })
})

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))