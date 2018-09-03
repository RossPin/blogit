var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-test")

var postSchema = new mongoose.Schema({ title: String, text: String, comments: Array})
var Post = mongoose.model('Post', postSchema)

function addPost(post) {
  post.comments = ['comment']
  var postData = new Post(post)  
  return postData.save()
}

function getPost() {
  return Post.find({})
}

function delPost(postId){
  return Post.remove({_id: postId})
}

module.exports = {
  addPost,
  getPost,
  delPost
}