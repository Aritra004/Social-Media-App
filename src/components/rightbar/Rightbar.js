import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="https://th.bing.com/th/id/OIP.J9rgnnBKS1wNnvNieMTArQHaE8?pid=ImgDet&rs=1"
            alt=""
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> other friends</b> have a birthday today
          </span>
        </div>
        <img
          src="https://th.bing.com/th/id/R.615e42b4d819700c61f4f7d3acfbbedb?rik=NpqcdUzQvsF6bA&riu=http%3a%2f%2fwww.picserver.org%2fhighway-signs2%2fimages%2fadvertising.jpg&ehk=Mc44Lu2hAueE%2bIpHvqDnbqlY5hnpH%2fgQv0Kv7%2fpRTE4%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="rightbarAd"
        />
        <span className="rightbarTitle">Online Friends</span>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
