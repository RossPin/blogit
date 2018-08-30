var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-test")

var postSchema = new mongoose.Schema({ title: String, text: String })
var Post = mongoose.model('Post', postSchema)

function addPost(post) {
  var postData = new Post(post)  
  return postData.save()
}

function getPost() {
  return Post.find({})
}

module.exports = {
  addPost,
  getPost
}