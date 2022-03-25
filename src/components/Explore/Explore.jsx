import "./Explore.css";
import "../../App.css"
import {useState, useEffect} from "react";
import {BsPlayCircleFill} from "react-icons/bs"
import {CgPlayListAdd} from "react-icons/cg"
import axios from "axios";
export const Explore = () => {
    const [video, setVideo] = useState([]);
    const getVideo = async () => {
        const response = await axios.get("/api/videos");
        setVideo(response.data.videos);
    }
    useEffect(()=>{
        getVideo();
    },[])

    
    
    return (<div className="video-category">
        <h4 className="category-heading">Anime Music</h4>
        <div className="video-category-div">
        { video.map((clip)=>{
            return clip.tag ==="music" ?
           <div className="video-card" key={clip._id}>
            <div className="img-div">
                <img src={clip.thumbnail} alt="thumbnail" className="thumbnail" />

                <BsPlayCircleFill className="play-btn"/>
                <span className="duration">{clip.duration}</span>
            </div>
            <div className="video-header">
                <h3 className="video-title">{clip.title}</h3>
                <span className="creater-name">by {clip.creator} | {clip.views} views</span>
                <div className="content">
                <span className="upload-date">{clip.date}</span>
                <span>
                    <CgPlayListAdd className="playlist-add-btn"/>
                </span>
                </div>
            </div>
        </div> : <></>
        }) }
        </div>

        <h4 className="category-heading">Artwork</h4>
        <div className="video-category-div">
        { video.map((clip)=>{
            return clip.tag ==="artwork" ?
           <div className="video-card" key={clip._id}>
            <div className="img-div">
                <img src={clip.thumbnail} alt="thumbnail" className="thumbnail" />

                <BsPlayCircleFill className="play-btn"/>
                <span className="duration">{clip.duration}</span>
            </div>
            <div className="video-header">
                <h3 className="video-title">{clip.title}</h3>
                <span className="creater-name">by {clip.creator} | {clip.views} views</span>
                <div className="content">
                <span className="upload-date">{clip.date}</span>
                <span>
                    <CgPlayListAdd className="playlist-add-btn"/>
                </span>
                </div>
            </div>
        </div> : <></>
        }) }
        </div>
    </div>)
}