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
      this.setState({posts})
    })
  }

  render(){    
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post._id}>{post._id}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Postlist