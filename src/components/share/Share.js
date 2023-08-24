import './share.css'
import {MdOutlinePermMedia, MdLocationOn, MdEmojiEmotions} from 'react-icons/md';
import {AiFillTags} from 'react-icons/ai';

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook-945x1024.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdOutlinePermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <AiFillTags htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationOn htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions htmlColor="golden" className="shareIcon" />
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share