import React from 'react'
import {connect} from 'react-redux'
import { getBlogs, delBlog } from '../actions/blogs';

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

  delete(postId){
    this.props.dispatch(delBlog(postId))
  }

  render(){    
    return (
      <div className='postList'>
        <h2>Posts</h2>
        <ul>
          {this.props.blogs.map(post => (
            <li key={post._id}>{post.title} - <span onClick={()=>this.delete(post._id) }>Delete</span></li>
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