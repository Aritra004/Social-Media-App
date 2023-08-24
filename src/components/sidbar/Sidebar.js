import "./sidebar.css";
import { MdRssFeed, MdGroups3, MdEmojiEvents } from "react-icons/md";
import { BsFillChatSquareDotsFill, BsFillBookmarkStarFill, BsQuestionSquareFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { FaSuitcase, FaDiscourse } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidbarList">
          <li className="sidbarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidbarListItem">
            <BsFillChatSquareDotsFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidbarListItem">
            <BiSolidVideos className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidbarListItem">
            <MdGroups3 className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidbarListItem">
            <BsFillBookmarkStarFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidbarListItem">
            <BsQuestionSquareFill className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidbarListItem">
            <FaSuitcase className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidbarListItem">
            <MdEmojiEvents className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidbarListItem">
            <FaDiscourse className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <div className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="https://th.bing.com/th/id/OIP.OF49gkEuC_ct2_xLgAguGgHaLH?pid=ImgDet&rs=1" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Tyrion Lannister</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://lh3.googleusercontent.com/-75PEaiU9U3s/VOIS2XRjj1I/AAAAAAAAA8g/hrSIcbRe89s/s2048/cool-and-stylish-profile-pictures-for-facebook-for-girls-2015-cool-and-stylish-profile-pictures-for-facebook-for-girls-2014-1931-AZ.jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Cersei Lannister</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://th.bing.com/th/id/OIP.RRt9Ggh48tdq2E5wjqKhpAHaH6?pid=ImgDet&rs=1" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Jon Snow</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://www.techtrickseo.com/wp-content/uploads/2017/11/20369638_727832947404217_3701320580922365861_o.jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Arya Stark</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://learn.zoner.com/wp-content/uploads/2019/01/how-can-you-get-good-profile-photos-watch-for-these-6-things.jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Sansa Stark</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://wallpapercave.com/wp/wp2976802.jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">John Arryn</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture.jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Ned Stark</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://th.bing.com/th/id/OIP.JEOlJ-pcKAv0FJFpsAzhNQHaLH?pid=ImgDet&rs=1" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Robert Baraetheon</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://th.bing.com/th/id/OIP.tLwtiHmJuMwaC8oY-mX_GgAAAA?pid=ImgDet&rs=1" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">Tisha Reyes</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://4.bp.blogspot.com/-rsrBAJdx-9Q/UhhnPVFO7_I/AAAAAAAAEtU/Ejc1kZ3bSi4/s1600/a+(11).jpg" alt="" className="sidebarProfile" />
                <span className="sidebarFriendName">April Odom</span>
            </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
