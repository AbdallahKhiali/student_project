import React from 'react'
import Navbar from "./Navbar"
import "../styles/landing.css"
import { Link } from 'react-router-dom'
function Landing() {
    return (
        <div className="landing" >
            <div className="landing-bg" />
            <div className="landing-content">
                <Navbar />
                <div className="landing-text" >
                    <h1 className="landing-text-header">
                        We Gonna Get you The JOB
                    </h1>
                    <p className="landing-text-subheader" >
                        Recruiting is hard ? , we gonna make it easy for you !
                    </p>

                    <div className="landing-text-button">
                        <Link className="link" to="/login" >Get started</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landing
