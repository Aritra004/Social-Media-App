import React from 'react'
import './Topbar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPersonFill, BsFillChatDotsFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">AritraSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <AiOutlineSearch className="searchIcon" />
            <input placeholder="Search for friends, posts or videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <BsFillPersonFill />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <IoIosNotifications />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <BsFillChatDotsFill />
                <span className="topbarIconBadge">3</span>
            </div>
        </div>
        <img src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook-945x1024.jpg" alt="profile" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
