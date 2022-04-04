import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"


function Navbar() {
    return (
        <header className="navbar" >
            
            <ul className="nav_actions" >
                <li className="nav_action" >
                    <Link className="link" to="/" >Services</Link>
                </li>
                <li className="nav_action" >
                    <Link className="link" to="/" >About</Link>
                </li>
                <li className="nav_action" >
                    <Link className="link" to="/" >Contact</Link>
                </li>
            </ul>

            <div className="nav_button" >
            <Link className="link" to="/login" >Log in</Link>

            </div>

        </header>
    )
}

export default Navbar
