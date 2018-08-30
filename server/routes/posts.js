const router = require('express').Router()
const db = require('../db/db')

router.post('/addpost', (req, res) => {
  console.log(req.body)
  db.addPost(req.body).then(result => {
    db.getPost().then((posts) => {
      res.json(posts)
    })
  })
})

router.get('/getposts', (req, res) => {
  db.getPost().then((posts) => {
    res.json(posts)
  })
})

module.exports = router