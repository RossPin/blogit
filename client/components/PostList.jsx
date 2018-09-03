import React from 'react'
import {connect} from 'react-redux'
import { getBlogs, delBlog, setBlog } from '../actions/blogs';

class Postlist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    this.delete = this.delete.bind(this)
  }

  componentDidMount(){
    // getPosts().then(posts => { 
    //   console.log(posts)     
    //   this.setState({posts})
    // })
    this.props.dispatch(getBlogs())
  }

  setPost(post){
    this.props.dispatch(setBlog(post))
  }

  delete(postId){
    this.props.dispatch(delBlog(postId))
  }

  render(){    
    return (
      <div className='postList'>
        <h2>Posts</h2>
        <ul>
          {this.props.blogs.map(post => (
            <li key={post._id}><span onClick={()=>this.setPost(post)}>{post.title}</span> - <button onClick={()=>this.delete(post._id) }>Delete</button></li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({blogs}) => ({
  blogs
})

export default connect(mapStateToProps)(Postlist)