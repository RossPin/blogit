import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        user: state.user,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        errorMessage: state.errorMessage,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        user: state.user,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        errorMessage: state.errorMessage,
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
    case 'REGISTER_REQUEST':
      return {
        user: state.user,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'REGISTER_FAILURE':
      return {
        user: state.user,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    default:
      return state
  }
}
