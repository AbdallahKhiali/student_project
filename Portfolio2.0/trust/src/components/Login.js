import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/form.css"

function Login() {
    const [loginForm, setloginForm] = useState({
        email:'',
        password:'',
    })
    const handleInput = (e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setloginForm({...loginForm,[name]:value})
    }
    const login=(e)=>{
        e.preventDefault()    
        axios.post('http://localhost:3001/user/login',loginForm).then(result=>{
            console.log(result)    
            // alert('logged')
        localStorage.setItem('userId',result.data._id)
            localStorage.setItem('token',result.data.token)
            window.location.replace('/application')
    
        }).catch(err=>alert(err))
    }
    return (
        <div className="_form_container ">
            <div className="_form" >
                <p className="form_form_header" >
                    WELCOME BACK
                </p>
                <input placeholder="Email" className="_form_input" name="email"   value={loginForm.email} onChange={handleInput} />
                <input placeholder="Password" type="password" className="_form_input" name="password"  value={loginForm.password} onChange={handleInput}  />
                <Link className="_link" to="/signup ">you do not have an account ,  sign up! </Link>
                <div className="_form_btn"  onClick={login} >
                    Login
                </div>
            </div>
            <div className="lp_right" >

            </div>
        </div>
    )
}

export default Login
