import React from 'react'
import { getPosts } from '../api';

class Postlist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    getPosts().then(posts => { 
      console.log(posts)     
      this.setState({posts})
    })
  }

  render(){    
    return (
      <div className='postList'>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Postlist