import React from 'react'
import {connect} from 'react-redux'

const Post = props => {
    return (
        <div>
            <h1>{props.currentBlog.title}</h1>
            <p>{props.currentBlog.text}</p>
            <h4>Comments</h4>
            <ul>
                {props.currentBlog.comments.map(comment => 
                    <li>{comment}</li>
                )}
            </ul>

        </div>
    )
}

const mapStateToProps = ({currentBlog}) => ({currentBlog})

export default connect(mapStateToProps)(Post)