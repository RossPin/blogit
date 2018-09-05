const router = require('express').Router()
const db = require('../db/users')

router.post('/adduser', (req, res) => {  
    db.addPostUser(req.body).then(user => {      
      res.json(user)    
    })
  })