import React from 'react'
import {connect} from 'react-redux'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
    }

    updateDetails(e){
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
      }
    
    submit(e){
    e.preventDefault()
    const comment = {id: this.props.currentBlog._id, comment: this.state.comment}
    this.props.dispatch(addComment(comment))
    }

    render(){
        return (
            <div>
                <h1>{props.currentBlog.title}</h1>
                <p>{props.currentBlog.text}</p>
                <h3>Comments</h3> 
                <form action="" method="post" onSubmit={this.submit}>
                    <input type="text" onChange={this.updateDetails} name="comment" value={this.state.comment}/>
                    <input type="submit" value="Post Comment"/>
                </form>           
                <ul>
                    {props.currentBlog.comments.map(comment => 
                        <li>{comment}</li>
                    )}
                </ul>
    
            </div>
        )
    }
}

const mapStateToProps = ({currentBlog}) => ({currentBlog})

export default connect(mapStateToProps)(Post)