import React from 'react';
import YTDatas from './YTDatas.json'
function YouTubeVideo() {
  return (
    <div className="video-container">
      {/* <iframe
        title="YouTube video player"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${YTDatas.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe> */}
       <video
         tabIndex="-1"
        className="video-stream html5-main-video"
           style={{width: '463px', height: '260px', left: '0px', top: '0px'}}
        src="https://www.youtube.com/watch?v=GkZ_xkV4zUo&ab_channel=HellHades"
       ></video>
    </div>
  );
}

export default YouTubeVideo;
