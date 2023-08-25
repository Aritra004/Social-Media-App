import "./rightbar.css";

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
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://i.pinimg.com/736x/ff/46/3b/ff463bf838d3f730f4b373f5d689d4c5.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gamora</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.bPBxcEUX3HgfhZfMm3p3gwHaNK?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Peter Quill</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.9iA-3gUisRbGvceoWAAtMwHaEK?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rocket</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.NNihwg8LEbTFLB2Cb-T7ewHaLy?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Drax</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.VthW7vjSCupeEFUrBBXzTgHaIp?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Groot</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://wallpapercave.com/wp/wp4298101.png"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mantis</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.21fV1zJvJ9zgeaZXvNhtdAHaKc?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Nebula</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.iD-DLh5NRStUnPKSUq1IIQHaFf?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Batman</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                src="https://th.bing.com/th/id/OIP.kzbKw73w0RjfkLwawr8GqAHaHO?pid=ImgDet&rs=1"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Superman</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
