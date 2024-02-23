import React, { useState, useEffect } from "react";
import StylishError from "../../../components/Errors/YTVideos_Erros/StylishError ";
import Spiner from "../../../components/Loaders/Spiner";
import "./YouTubeVideo.css";
function YouTubeVideo({ apiKey, channelId, page }) {
  const [videos, setVideos] = useState([]);
  const maxResults = 10;
  const startIndex = (page - 1) * maxResults + 1;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch videos from YouTube Data API
    fetch(`
      https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&startIndex=${startIndex}
    `)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          const fetchedVideos = data.items.map((item) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }));
          setVideos(fetchedVideos);
        } else {
          console.error("No items found in the YouTube API response.");
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [apiKey, channelId, page, startIndex]);
  if (loading) {
    return <Spiner />;
  }

  if (error) {
    return <StylishError />;
  }

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div key={video.videoId} className="video-item">
          <iframe
            title={video.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default YouTubeVideo;
