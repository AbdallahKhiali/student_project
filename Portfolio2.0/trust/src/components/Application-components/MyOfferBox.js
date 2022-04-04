import axios from 'axios'
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import { IoMdOpen } from 'react-icons/io'
import { ImUsers } from 'react-icons/im'
import "../../styles/myofferbox.css"
import Modify from './utils/Modify'
import Show from './utils/Show'
import List from './utils/List'

function MypostBox({ titlejob, companyname, categorie, location, id }) {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const deletepost = (id) => {
        axios.delete(`http://localhost:3001/offer/${id}`, config).then(window.location.replace('/application/myposts'))
    }

    const [showmodal, setshowmodal] = useState(false)
    const [modal, setmodal] = useState(false)
    const [showListmodal, setshowListmodal] = useState(false)

    return (
        <div className="_mypost" >
            <div className="_mypost_info">
                <p className="_mypost_title">
                    {titlejob}
                </p>
                <p className="_mypost_company">
                    {companyname}
                </p>
                <p className="_mypost_categorie">
                    {categorie}
                </p>
                <p className="_mypost_location">
                    {location}
                </p>
            </div>
            <>
                <div className="_mypost_link" to="/post/:id" ><IoMdOpen onClick={()=>{setmodal(!modal)}} /></div>
                <div className="_mypost_link" ><BiTrash onClick={() => { deletepost(id) }} /></div>
                <div className="_mypost_link" ><BsFillPencilFill onClick={()=>{setshowmodal(!showmodal)}} /></div>
                <div className="_mypost_link" ><ImUsers onClick={()=>{setshowListmodal(!showListmodal)}} /></div>
            </>
            {
                (showmodal) ?
                    <Modify setshowmodal={setshowmodal} id={id} />
                    :
                    <></>
            }
            {
                    (modal) ?
                    <Show setmodal={setmodal} id={id} />
                    :
                    <></>
            }
            {
                    (showListmodal) ?
                    <List setmodal={setmodal} id={id} />
                    :
                    <></>
            }
        </div>
    )
}

export default MypostBox
