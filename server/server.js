const express = require('express')
const server = express()
const routes = require('./routes/routes')
const path = require('path')

server.use('/', routes)
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server