import React from 'react'
import Feed from '../../Fcomponents/feed/Feed';
import Fnavbar from '../../Fcomponents/Fnavbar/Fnavbar';
import Fsidebar from '../../Fcomponents/Fsidebar/Fsidebar';
import Rightbar from '../../Fcomponents/rightbar/Rightbar';
import "./Fhome.scss";

const Fhome = () => {
  return (
    <div className='Fhome'>
        <Fnavbar />
        <div className="homeContainer">
          <Fsidebar />
          <Feed />
          <Rightbar />
        </div>
    </div>
  )
}

export default Fhome
