var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-test")

var postSchema = new mongoose.Schema({ title: String, text: String, comments: Array})
var Post = mongoose.model('Post', postSchema)

function addPost(post) {
  post.comments = ['comment']
  var postData = new Post(post)  
  return postData.save()
}

function getPost(id) {
  return Post.find({_id: id}).then(posts => posts[0])
}

function getPosts() {
  return Post.find({})
}

function delPost(postId){
  return Post.remove({_id: postId})
}

function postComment(id, comment){
  return Post.update({_id: id}, {$push: {comments: comment}})
}

module.exports = {
  addPost,
  getPost,
  getPosts,
  delPost,
  postComment
}