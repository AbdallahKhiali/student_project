import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyOfferBox from './MyOfferBox'
import TopBar from './Topbar'
function MyPosts() {
    const [myoffers, setmyoffers] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get('http://localhost:3001/offer/myoffers',config).then(offers => setmyoffers(offers.data))
    }, [])
    return (
        <div>
            <TopBar />
            <div className="spa_content" >
                {
                    myoffers?.map(e => { return (<MyOfferBox titlejob={e.titlejob} companyname={e.companyname} categorie={e.categorie} location={e.location} key={e._id} id={e._id} />) })
                }
            </div>
        </div>
    )
}

export default MyPosts
