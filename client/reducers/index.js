import {combineReducers} from 'redux'

import blogs from './blogs'
import auth from './auth'
import currentBlog from './currentBlog'

export default combineReducers({
    blogs,
    currentBlog,
    auth
})