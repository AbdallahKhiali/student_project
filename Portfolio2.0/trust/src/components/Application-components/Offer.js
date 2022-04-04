import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import "../../styles/offer.css"
import Show from './utils/Show'
function Offer({ companyname, titlejob, location, categorie, id }) {


    const [modal, setmodal] = useState(false)

    const postule = (id) => {
        // axios.put(`http://localhost:3001/offer/postule`,config,id).then(window.location.reload)
        const token = localStorage.getItem('token')
        return fetch(`http://localhost:3001/offer/postule/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}` //Add this line
            },
            // body: JSON.stringify(id),
        })
    }

    return (
        <div className="_offer">

            <p className="_offer_header" >
                {titlejob}
            </p>
            <p className="_offer_subheader">{companyname}</p>
            <p>{categorie}</p>

            <div className="_offer_location" >
                <MdLocationOn />
                <p>{location}</p>
            </div>

            <div>
                <div onClick={() => { postule(id) }} style={{ float: 'right', color: 'white', padding: '10px', cursor: 'pointer' }} >postule</div>
                <div onClick={() => { setmodal(true) }} style={{ float: 'right', color: 'white', margin: '0 10px', padding: '10px', cursor: 'pointer' }} >consulte</div>
            </div>

            {
                (modal) ? <Show setmodal={setmodal} id={id} /> : <></>
            }


        </div>



    )
}

export default Offer
