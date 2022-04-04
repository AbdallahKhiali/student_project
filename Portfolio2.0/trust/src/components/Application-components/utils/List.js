import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import '../../../styles/listmodal.css'
import ListPerson from './ListPerson'
function List(props) {
    const [postInfo,setPostInfo]=useState()
    const { setshowListmodal , id } = props
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

    return (

        <div className="_listmodal" >
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }} >
                <p onClick={()=>{setshowListmodal(false)}} ><IoIosCloseCircleOutline/></p>
            </div>
            {
                console.log(postInfo),
                postInfo?.postule.map((e,i)=>{return(<ListPerson key={i}    />)})
            }
        </div>
    )
}

export default List
