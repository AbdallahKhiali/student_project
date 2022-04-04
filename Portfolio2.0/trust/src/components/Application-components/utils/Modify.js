import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Modify(props) {
    const { setshowmodal, id } = props
    const [PostInfo, setPostInfo] = useState()

    const token = localStorage.getItem('token')


    useEffect(() => {
        const getPostById = (id) => {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios.get(`http://localhost:3001/offer/${id}`, config).then(post => {
                setPostInfo(post.data)

            })
        }
        getPostById(id)

    }, [])


    const handleInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setPostInfo({ ...PostInfo, [name]: value })
    }

    const put = (id) => {

        const token = localStorage.getItem('token');

        return fetch(`http://localhost:3001/offer/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(PostInfo),
        }).then(window.location.replace('/application/myposts'))
    }


    return (
        <div className="_put_modal">
            {console.log(PostInfo)}
            <input placeholder="company name" className="_form_input" name="companyname" onChange={handleInput} />
            <input placeholder="job title" className="_form_input" name="titlejob" onChange={handleInput} />
            <input placeholder="job location" className="_form_input" name="location" onChange={handleInput} />
            <textarea placeholder="job description" className="_form_input" style={{
                padding: '15px 5px', height: '150px',
                resize: 'none'
            }} name="description" onChange={handleInput} />
            <select name="categorie" onChange={handleInput}  >
                <option value="UX/UI" >UX/UI</option>
                <option value="WEB DEV" >WEB DEV</option>
                <option value="APP DEV" >APP DEV</option>
                <option value="CM" >CM</option>
                <option value="DEVOPS" >DEVOPS</option>
                <option value="Other" >Other..</option>
            </select>
            <div className="_form_btn" onClick={() => put(id)} >
                Modify
            </div>
            <div className="_form_btn" onClick={() => setshowmodal(false)} >
                close
            </div>

        </div>
    )
}

export default Modify
