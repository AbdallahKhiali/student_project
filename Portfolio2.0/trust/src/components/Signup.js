import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/form.css"
function Signup() {

    const [signupForm, setsignupForm] = useState({
        firstname: '',
        lastname: '',
        sexe: 'Male',
        email: '',
        password: '',
    })
    const handleInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setsignupForm({ ...signupForm, [name]: value })
    }
    const signin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user',signupForm).then(window.location.replace('/login')).catch(err => console.log(err))
    }
    return (
        <div className="_form_container">
            <div className="_form" >
                <p className="form_form_header" >
                    WELCOME
                </p>
                {console.log(signupForm)}
                <input placeholder="First name" className="_form_input" name="firstname" value={signupForm.firstname} onChange={handleInput} />
                <input placeholder="Last name" className="_form_input" name="lastname" value={signupForm.lastname} onChange={handleInput} />
                <input placeholder="Email" className="_form_input" name="email" value={signupForm.email} onChange={handleInput} />
                <input placeholder="Password" type="password" className="_form_input" name="password" value={signupForm.password} onChange={handleInput} />
                <select value={signupForm.sexe} name="sexe" onChange={handleInput}   >
                    <option value='Male'  >Male</option>
                    <option value='Female' >Female</option>
                </select>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }} >
                    <input placeholder="checkbox" type="checkbox" name="checkbox" />
                    <p>I agree to the terms and conditions </p>
                </div>
                <Link className="_link" to="/login ">you do  have an account ,  log in ! </Link>
                <div className="_form_btn" onClick={signin} >
                    Signup
                </div>

            </div>
            <div className="lp_right" >

            </div>
        </div>
    )
}

export default Signup
