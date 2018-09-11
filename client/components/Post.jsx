import React from 'react'
import {connect} from 'react-redux'
import { addComment } from '../actions/blogs';

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: ''
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
    const comment = {id: this.props.currentBlog._id, comment: this.state.comment}
    this.props.dispatch(addComment(comment))
    this.setState({comment: ''})
    }

    render(){
        const paragraphs = this.props.currentBlog.text.split(/[\r\n]+/)
        return (
            <div>
                <h1>{this.props.currentBlog.title}</h1>
                {paragraphs.map(paragraph =>
                    <p>{paragraph}</p>
                )}
                <div className='comments'>               
                    <h3>Comments</h3> 
                    <form action="" method="post" onSubmit={this.submit}>
                        <input type="text" onChange={this.updateDetails} name="comment" value={this.state.comment}/>
                        <input type="submit" value="Post Comment"/>
                    </form>           
                    <ul>
                        {this.props.currentBlog.comments.map(comment => 
                            <li>{comment}</li>
                        )}
                    </ul>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = ({currentBlog}) => ({currentBlog})

export default connect(mapStateToProps)(Post)