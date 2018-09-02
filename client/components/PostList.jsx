import React from 'react'
import {connect} from 'react-redux'
import { getBlogs } from '../actions/blogs';

class Postlist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    // getPosts().then(posts => { 
    //   console.log(posts)     
    //   this.setState({posts})
    // })
    this.props.dispatch(getBlogs())
  }

  render(){    
    return (
      <div className='postList'>
        <h2>Posts</h2>
        <ul>
          {this.props.blogs.map(post => (
            <li key={post._id}>{post.title}</li>
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