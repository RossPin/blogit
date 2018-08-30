import React from 'react'
import Nav from './Nav'
import Postlist from './PostList';
import NewPost from './NewPost';

const App = () => {
    return (
        <div>
            <Nav/>
            <Postlist/>
            <NewPost/>
        </div>
    )
}

export default App