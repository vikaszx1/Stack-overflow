import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import icon from '../../assets/icon.png'
import register from '../../Community/Fpages/register/Register'
// import Hidden from '@material-ui/core/Hidden';



const Navbar = () => {

  const dispatch = useDispatch()
var User = useSelector((state) => (state.currentUserReducer))
const navigate = useNavigate()

const handleLogout = () => {
  dispatch({ type: 'LOGOUT'});
  navigate('/')
  dispatch(setCurrentUser(null))
}

useEffect(() => {
  const token = User?.token
  if(token){
    const decodedToken = decode(token)
    if(decodedToken.exp * 1000 < new Date().getTime()){
      handleLogout()
    }
  }
  dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])


  const [activeHam, setActiveHam] = useState(false);

  const menuItems = (
    <>
      <Link to='/' className='nav-item nav-btn a'>About</Link>
      <Link to='/' className='nav-item nav-btn a'>Products</Link>
      <Link to='/login' className='nav-item nav-btn a'>For Teams</Link>
    </>
  );


  return (
    <div className="navbar-container">
          <nav className='main-nav'>
        <div className='navbar'>
           <Link to='/' className='nav-item nav-logo'>
            <img src={logo} className='logo-img' alt='logo' />
            <img src={icon} className='icon-img' alt='logo' />

           </Link>



           <form id='nav-form'>
              <input type="text" className='nav-input' placeholder='Search...' />
              <img src={search} alt="search" width="18" className='search-icon'/>
          </form>







          <div className="menu">{menuItems}</div>

          {User === null ?
               <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
               <>
                 <Avatar className='avatar' backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`}  style={{color:"white", textDecoration:'none'}} className='avatar'>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                 <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
               </>
             }

           <button
              className={activeHam ? "hamburger active-hamburger" : "hamburger"}
              onClick={() => setActiveHam(!activeHam)}
          >
              <span></span>
              <span></span>
              <span></span>
           </button>


      </div>
    </nav>
    {activeHam && <div className="nav-dropdown">{menuItems}</div>}
 </div>
  )
}

export default Navbar
