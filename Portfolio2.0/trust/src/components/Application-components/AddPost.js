// import axios from 'axios'
import React, { useState } from 'react'
import TopBar from './Topbar'
// import { useEffect } from 'react'
function AddPost() {

    const [postForm, setpostForm] = useState({
        titlejob: '',
        companyname: '',
        description: '',
        location: '',
        categorie: 'UX/UI',
    })
    const handleInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setpostForm({ ...postForm, [name]: value })
    }
    const post = (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token');
        return fetch('http://localhost:3001/offer', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(postForm),
        }).then(window.location.replace('/application'))
    }
    return (

        <>
            <TopBar />
            <div className="_form" >
                {console.log(postForm)}
                <p className="form_form_header" >
                    POST AN OFFER
                </p>
                <input placeholder="company name" className="_form_input" name="companyname" value={postForm.companyname} onChange={handleInput} />
                <input placeholder="job title" className="_form_input" name="titlejob" value={postForm.titlejob} onChange={handleInput} />
                <input placeholder="job location" className="_form_input" name="location" value={postForm.location} onChange={handleInput} />
                {/* <input placeholder="description" type="text" className="_form_input" name="description" /> */}
                <textarea placeholder="job description" className="_form_input" style={{
                    padding: '15px 5px', height: '150px',
                    resize: 'none'
                }} name="description" value={postForm.description} onChange={handleInput} />
                <select name="categorie" value={postForm.categorie} onChange={handleInput}  >
                    <option value="UX/UI" >UX/UI</option>
                    <option value="WEB DEV" >WEB DEV</option>
                    <option value="APP DEV" >APP DEV</option>
                    <option value="CM" >CM</option>
                    <option value="DEVOPS" >DEVOPS</option>
                    <option value="Other" >Other..</option>

                </select>

                <div className="_form_btn" onClick={(e) => post(e)} >
                    Post
                </div>

            </div>
        </>
    )
}

export default AddPost
