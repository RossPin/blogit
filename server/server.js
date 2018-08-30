const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const posts = require('./routes/posts')
const path = require('path')

server.use(bodyParser.json())
server.use('/api/posts', posts)
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server