import React, { useEffect, useState } from 'react'
import Topbar from './Application-components/Topbar'
import "../styles/application.css"
import Offer from './Application-components/Offer'
import axios from 'axios'
function Application() {
    const [products, setproducts] = useState()
    const [filteredproducts, setfilteredproducts] = useState(products)

    const filterproducts = (cat) => {
        const updatedlist = products.filter((x) => x.categorie === cat)
        console.log(updatedlist)
        setfilteredproducts(updatedlist)
    }

    useEffect(() => {
        const getproducts = async () => {
            axios.get('http://localhost:3001/offer')
                .then(products => setproducts(products.data))
        }
        getproducts()
    }, [products])

    return (
        <div>
            <Topbar />
            <div>
                <ul className="_sort">
                    <li className="_sort_item" onClick={() => { setfilteredproducts(products) }} >ALL</li>
                    <li className="_sort_item" onClick={() => { filterproducts('UX/UI') }}  >UX/UI</li>
                    <li className="_sort_item" onClick={() => { filterproducts('WEB DEV') }} >WEB DEV</li>
                    <li className="_sort_item" onClick={() => { filterproducts('APP DEV') }} >APP DEV</li>
                    <li className="_sort_item" onClick={() => { filterproducts('CM') }} >CM</li>
                    <li className="_sort_item" onClick={() => { filterproducts('DEVOPS') }} >DEVOPS</li>
                    <li className="_sort_item" onClick={() => { filterproducts('Other') }} >Other</li>
                </ul>
                <div className="spa_content" >
                    {
                        filteredproducts?.map(e => { return (<Offer titlejob={e.titlejob} companyname={e.companyname} categorie={e.categorie} location={e.location} key={e._id} id={e._id} />) })
                    }
                </div>
            </div>
        </div>
    )
}

export default Application
