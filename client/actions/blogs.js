import {addPost, getPosts, delPost, postComment} from '../api'

export const updateBlogs = blogs => ({
    type: 'UPDATE_BLOGS',
    blogs
  })

export const setBlog = blog => ({
  type: 'SET_BLOG',
  blog
})

export const addBlog = blog => 
  dispatch => addPost(blog)
    .then(blog => {
      getPosts()
        .then(blogs => {
          dispatch(updateBlogs(blogs))
        })      
    })

export const getBlogs = () =>
    dispatch => getPosts()
    .then(blogs => {
      dispatch(updateBlogs(blogs))
    }) 

export const delBlog = postId => 
  dispatch => delPost(postId)
  .then(blog => {
    getPosts()
      .then(blogs => {
        dispatch(updateBlogs(blogs))
      })      
  })

export const addComment = comment => 
  dispatch => postComment(comment)
    .then(blog => {
      getPosts()
        .then(blogs => {
          dispatch(updateBlogs(blogs))
        })      
    })
