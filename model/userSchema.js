const mongoose = require ('mongoose');
const {Schema} = mongoose

const Rita = new Schema({
    name: String,
    email: String,
    password: String,
    token: String,
})


module.exports = mongoose.model ("JWT", Rita)