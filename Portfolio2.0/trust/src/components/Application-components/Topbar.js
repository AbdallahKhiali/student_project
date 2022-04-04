import "../../styles/topbar.css"
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiLogOut , FiUser} from 'react-icons/fi'
import { Link } from 'react-router-dom'
function TopBar() {
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.replace('/')
    }
    return (
        <div className="topbar">

            <Link className="_topbar_link" to="/application">
                CLONE
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <Link className="_topbar_link" to="/application/myposts">
                    {/* <FaUserAlt /> */}
                    <FiUser />
                </Link>

                <Link className="_topbar_link" to="/post/add">
                    <AiOutlinePlus/>
                </Link>
                <div style={{ cursor: 'pointer' }} className="_topbar_link" onClick={logout}  >
                    <FiLogOut/>
                </div>


            </div>

        </div>
    )
}

export default TopBar
