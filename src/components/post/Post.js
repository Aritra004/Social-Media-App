import './post.css'
import {CiMenuKebab} from 'react-icons/ci';
import {Users} from "../../dummyData";
import { useState } from 'react';

const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <CiMenuKebab />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="https://th.bing.com/th/id/R.a5b2dd86cd06adfd31a7d1348a1bee73?rik=uXD3qN0Ov2Xlmg&riu=http%3a%2f%2fpngimg.com%2fuploads%2flike%2flike_PNG15.png&ehk=DG%2fOurEFOA24xCwhL0JmFuolOEqXQkXvmcEWUzLOcoU%3d&risl=&pid=ImgRaw&r=0" alt="" className="likeIcon" onClick={likeHandler} />
                    <img src="https://th.bing.com/th/id/OIP.yPEq1maxk7EQm8e_xWLByQHaGt?pid=ImgDet&rs=1" alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="likeCounter">{like} People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post