import React, { useContext } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user,error,dispatch} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className='navbarContainer'>
          <Link to="/">
            <span className='logo'>bookigs</span>
          </Link>
           {user?user.username :
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>}
        </div>        
    </div>
  )
}

export default Navbar;