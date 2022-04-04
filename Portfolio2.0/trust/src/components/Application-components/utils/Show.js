import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../../styles/showModal.css"
function Show(props) {

    const { setmodal, id } = props
    const [post, setpost] = useState({})
    useEffect(() => {
        const getPostById = async (id) => {

            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const data = await axios.get(`http://localhost:3001/offer/${id}`, config)
            setpost(data.data)
        }
        getPostById(id)


    }, [])
    return (
        <div className="show_modal">
            <p className="_offer_header" >
                {post.titlejob}
            </p>
            <p className="_offer_subheader">{post.companyname}</p>
            <p>{post.categorie}</p>
            <p>{post.location}</p>
            <p className="_offer_subheader">{post.description}</p>
            <div onClick={() => setmodal(false)} style={{ color: 'white', background:"#000" ,  margin: '0 10px', padding: '10px', cursor: 'pointer' }} >close</div>
        </div>
    )
}

export default Show
