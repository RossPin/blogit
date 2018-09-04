const router = require('express').Router()
const db = require('../db/db')

router.post('/addpost', (req, res) => {  
  db.addPost(req.body).then(post => {      
    res.json(post)    
  })
})

router.get('/getpost/:id', (req, res) => {
  const {id} = req.params
  db.getPost(id).then((post) => {
    res.json(post)
  })
})

router.get('/getposts', (req, res) => {
  db.getPosts().then((posts) => {
    res.json(posts)
  })
})

router.delete('/delpost', (req, res) => {
  db.delPost(req.body.postId).then(() => {
    res.sendStatus(200)
  })
})

router.post('/postcomment', (req, res) => {
  const {id, comment} = req.body
  db.postComment(id, comment).then(() => {
    db.getPost(id).then(post => {
      res.json(post) 
    })       
  })
})

module.exports = router