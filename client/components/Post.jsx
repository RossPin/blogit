import React from 'react'
import {connect} from 'react-redux'

const Post = props => {
    return (
        <div>
            <h1>{props.currentBlog.title}</h1>
            <p>{props.currentBlog.text}</p>
        </div>
    )
}

const mapStateToProps = ({currentBlog}) => ({currentBlog})

export default connect(mapStateToProps)(Post)