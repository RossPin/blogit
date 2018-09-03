import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <h1>BlogIt</h1>
      <Link to='/'><button>Home</button></Link>
    </div>
  )
}

export default Nav