import React, { useContext } from 'react'
import Fnavbar from "../../Fcomponents/Fnavbar/Fnavbar"
import Fsidebar from "../../Fcomponents/Fsidebar/Fsidebar"
import Feed from "./../../Fcomponents/feed/Feed"
import Rightbar from "./../../Fcomponents/rightbar/Rightbar"
import { AuthContext } from '../../context/AuthContext'
import UsersPost from "../../Fcomponents/usersPost/UsersPost"
import "./profile.scss"

const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='profile'>
      <Fnavbar />
      <div className="profileWrapper">
        <Fsidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/profileCover/profilecover.jpg" alt="" className='profileCoverImg' />
                    <img src={currentUser.photoURL} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{currentUser.displayName}</h4>
                    <span className="profileInfoDesc">Hi Friends</span>
                </div>
            </div>
            <div className="profileRightBottom">

                <UsersPost />
                <Rightbar profile />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
