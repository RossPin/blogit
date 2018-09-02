import {addPost, getPosts} from '../api'

export const updateBlogs = blogs => ({
    type: 'UPDATE_BLOGS',
    blogs
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
