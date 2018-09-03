const router = require('express').Router()
const db = require('../db/db')

router.post('/addpost', (req, res) => {  
  db.addPost(req.body).then(post => {      
    res.json(post)    
  })
})

router.get('/getposts', (req, res) => {
  db.getPost().then((posts) => {
    res.json(posts)
  })
})

router.delete('/delpost', (req, res) => {
  db.delPost(req.body.postId).then(() => {
    res.sendStatus(200)
  })
})

module.exports = router