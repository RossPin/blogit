const Router = require('express').Router()
const db = require('../db/db')

Router.post('/addpost', (req, res) => {
  console.log(req.body)
  db.addPost(req.body).then(result => {
    db.getPost().then((posts) => {
      res.json(posts)
    })
  })
})

module.exports = Router