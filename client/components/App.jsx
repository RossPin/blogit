import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Postlist from './PostList'
import NewPost from './NewPost'
import Post from './Post'
import Login from './Auth/Login';
import Register from './Auth/Register';

const App = () => {
    return (
        <HashRouter>
        <div>
            <Nav/>
            <div className="container">
                <Route path='/' component={Postlist}/>
                <div className='content'>
                <Route path="/login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path='/new' component={NewPost}/>
                <Route path='/view' component={Post}/>
                </div>
            </div>
        </div>
        </HashRouter>
    )
}

export default App