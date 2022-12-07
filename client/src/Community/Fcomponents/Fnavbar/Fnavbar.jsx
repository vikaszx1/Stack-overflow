import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import "./Fnavbar.scss"
import logo from '../../../assets/logo.png'
import icon from '../../../assets/icon.png'
import "../../../components/Navbar/Navbar.css";

const Fnavbar = () => {
  const {currentUser}=useContext(AuthContext);

  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
      <Link to='/' className='nav-item nav-logo'>
       <img src={logo} className='logo-img' alt='logo' />
       <img src={icon} className='icon-img' alt='logo' />
      </Link>
      </div>

      <div className="navbarCenter">
        <div className="searchBar">
            <SearchIcon className='searchIcon' />
            <input type="text" placeholder='Search...' className='searchInput' />
        </div>
      </div>
      <div className="navbarRight">

        <div className="navbarIcons">
            <div className="navbarIconItem">
                <PersonIcon />
                <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
                <ChatBubbleIcon />
                <span className="navbarIconBadge">10</span>
            </div>
            <div className="navbarIconItem">
                <NotificationsIcon />
                <span className="navbarIconBadge">8</span>
            </div>
        </div>
        <Link to={`/profile/${currentUser.displayName}`}>
          <img src={currentUser.photoURL} alt="" className="navbarImg" />
        </Link>
      </div>
    </div>
  )
}

export default Fnavbar
