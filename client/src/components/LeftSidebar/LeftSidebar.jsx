import React from 'react'

import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeclassname='active' >
              <img src={Globe} className='globe-img' alt="Globe" />
              <p className='globe-ques'>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                <p className='tags'>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                <p className='users'>Users</p>
           </NavLink>
           </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
