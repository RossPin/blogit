import {combineReducers} from 'redux'

import blogs from './blogs'
import currentBlog from './currentBlog'

export default combineReducers({
    blogs,
    currentBlog
})