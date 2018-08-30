import React from 'react'
import { addPost } from '../api';

class NewPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateDetails(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e){
    e.preventDefault()
    addPost(this.state).then(posts => {

    })
  }

  render(){
    return(
      <div>
        <form action="" method="post" onSubmit={this.submit}>
          <input type="text" onChange={this.updateDetails} name="title" value={this.state.title}/>
          <input type="text" onChange={this.updateDetails} name="text" value={this.state.text}/>
          <input type="submit" value="Post Blog"/>
        </form>
      </div>
    )
  }
}

export default NewPost