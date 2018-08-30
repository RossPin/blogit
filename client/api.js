import request from 'superagent'

export function addPost(post) {
  return request.post('/api/posts/addpost')
            .send(posts)
            .then(res => {
              return res.body
            })
}

export function getPosts() {
  return request.get('/api/posts/getposts')            
            .then(res => {
              return res.body
            })
}