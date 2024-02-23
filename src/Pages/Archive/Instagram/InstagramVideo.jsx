import React, { useState, useEffect } from "react";
import "./InstagramVideo.css";
import StylishError from "../../../components/Errors/YTVideos_Erros/StylishError ";
import Spiner from "../../../components/Loaders/Spiner";

function InstagramVideo({ accessToken, page }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const maxResults = 10;
    const startIndex = (page - 1) * maxResults;

    fetch(`
      https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${maxResults}&offset=${startIndex}&media_type=IMAGE
    `)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          const fetchedImages = data.data.map((item) => ({
            mediaId: item.id,
            caption: item.caption || "No caption",
            thumbnail: item.thumbnail_url,
            mediaUrl: item.media_url,
            type: "image",
          }));
          setImages(fetchedImages);
          setLoading(false);
        } else {
          console.error("No images found in the Instagram API response.");
          setLoading(false);
          setError(true)
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [accessToken, page]);

  const allMedia = [...images];
  if (loading) {
    return <Spiner />;
  }

  if (error) {
    return <StylishError />;
  }
  return (
    <div className="media-gallery">
      {loading && <div className="loading-spinner"></div>}
      {allMedia.map((item) => (
        <div key={item.mediaId} className="media-item">
          <img src={item.mediaUrl} alt={item.caption} />
        </div>
      ))}
    </div>
  );
}

export default InstagramVideo;
