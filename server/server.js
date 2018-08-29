const express = require('express')
const server = express()
const routes = require('./routes/routes')

server.use('/', routes)

module.exports = server