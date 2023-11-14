import moment from "moment"

const VideoLengths = ({time}) => {
     const videoLengthInSecond = moment().startOf("day").seconds(time).format("H:mm:ss")
    return(
        <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">{videoLengthInSecond}</div>
    )
}

export default VideoLengths