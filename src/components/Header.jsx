import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header-content">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/table">Table</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header