
import video from "../../assets/video.mp4"

const VideoSection = () => {
    return (
        <div className="lg:mt-40 mt-14">
            <video src={video} controls ></video>
        </div>
    );
};

export default VideoSection;