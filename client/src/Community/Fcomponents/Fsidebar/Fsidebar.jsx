import React, { useContext } from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./Fsidebar.scss"
import MenuLink from '../menuLink/MenuLink';
import Friends from '../friends/Friends';
import { Users } from '../../data';
import { DarkModeContext } from '../../context/darkModeContext';
import { signOut } from "firebase/auth";
import {auth} from "../../firebase"
import { Link } from 'react-router-dom';

const Fsidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
       <Link to='/Fhome' className='cHome'>CommunityHome</Link>
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<ChatIcon />} text="Chats" />
        <MenuLink Icon={<VideocamIcon />} text="Videos" />
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        <MenuLink Icon={<BookmarkIcon />} text="Bookmarks" />
        <MenuLink Icon={<ShoppingCartIcon />} text="Marketplace" />
        <MenuLink Icon={<EventIcon />} text="Events" />
        <span onClick={()=>dispatch({ type: "TOGGLE" })}>
        <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </span>
        <span onClick={() => signOut(auth)}>
        <MenuLink Icon={<ExitToAppIcon />} text="Logout" />
        </span>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">


          {Users.map(u => (
            <Friends key={u.id} user={u} />
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Fsidebar
