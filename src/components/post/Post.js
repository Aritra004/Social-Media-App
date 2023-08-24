import './post.css'
import {CiMenuKebab} from 'react-icons/ci';

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="https://th.bing.com/th/id/OIP.IypRGR9MQBkHeVhcdZEn4wHaD4?pid=ImgDet&rs=1" alt="" className="postProfileImg" />
                    <span className="postUserName">Aritra Debnath</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <CiMenuKebab />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Lorem ipsum dolor sit.</span>
                <img src="https://thumbs.dreamstime.com/b/wooden-posts-3021628.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="https://th.bing.com/th/id/R.a5b2dd86cd06adfd31a7d1348a1bee73?rik=uXD3qN0Ov2Xlmg&riu=http%3a%2f%2fpngimg.com%2fuploads%2flike%2flike_PNG15.png&ehk=DG%2fOurEFOA24xCwhL0JmFuolOEqXQkXvmcEWUzLOcoU%3d&risl=&pid=ImgRaw&r=0" alt="" className="likeIcon" />
                    <img src="https://th.bing.com/th/id/OIP.yPEq1maxk7EQm8e_xWLByQHaGt?pid=ImgDet&rs=1" alt="" className="likeIcon" />
                    <span className="likeCounter">32 People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post