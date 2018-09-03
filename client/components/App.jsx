import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Postlist from './PostList'
import NewPost from './NewPost'
import Post from './Post'

const App = () => {
    return (
        <HashRouter>
        <div>
            <Nav/>
            <Route path='/' component={Postlist}/>
            <div className='content'>
                <Route path='/new' component={NewPost}/>
                <Route path='/view' component={Post}/>
            </div>
        </div>
        </HashRouter>
    )
}

export default App