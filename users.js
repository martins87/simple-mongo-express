const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: String
}, {collection: 'users'})

module.exports = mongoose.model('Users', usersSchema)