/* eslint-disable no-undef */
const mongoose = require('mongoose')

const Connectdb = async (url) => {
    return await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    })
}

module.exports = Connectdb
