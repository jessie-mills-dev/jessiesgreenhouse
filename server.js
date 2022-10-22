const express = require('express')
const hbs = require('express-handlebars')
//const fsPromises = require('node:fs/promises')
const server = express()
//const blogRoutes = require('./blogroutes')
//const aboutRoutes = require('./aboutroutes')
const plantRoutes = require('./plantroutes')

module.exports = server

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// server.use('/about', aboutRoutes)
server.use('/plant', plantRoutes)
// server.use('/blog', blogRoutes)

server.get('/', (req, res) => {
  res.render('home')
})
