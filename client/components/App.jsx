import React from 'react'
import Nav from './Nav'
import Postlist from './PostList';
import NewPost from './NewPost';
import Post from './Post';

const App = () => {
    return (
        <div>
            <Nav/>
            <Postlist/>
            <NewPost/>
            <Post/>
        </div>
    )
}

export default App