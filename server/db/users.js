var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-test")

var userSchema = new mongoose.Schema({ username: String, hash: String})
var User = mongoose.model('User', userSchema)

function adduser(user) {
  var userData = new User(user)  
  return userData.save()
}