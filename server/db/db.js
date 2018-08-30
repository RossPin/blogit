var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog")

var postSchema = new mongoose.Schema({ body: String })
var Post = mongoose.model('Post', postSchema)

function addPost(data) {
  var postData = new Post(data)
  return postData.save()
}

function getPost() {
  return Post.find({})
}

module.exports = {
  addPost,
  getPost
}