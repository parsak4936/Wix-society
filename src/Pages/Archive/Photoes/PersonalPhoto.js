// import React, { useState, useEffect } from "react";
// import "./PersonalPhoto.css";
// import StylishError from "../../../components/Errors/YTVideos_Erros/StylishError";
// import Spiner from "../../../components/Loaders/Spiner";

// function PersonalPhoto({ oneDriveBaseUrl, page }) {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     // Replace 'your-onedrive-folder' with the actual folder in your OneDrive where images are stored
//     const oneDriveFolder = "your-onedrive-folder";
//     const maxResults = 10;
//     const startIndex = (page - 1) * maxResults;

//     fetch(
//       `${oneDriveBaseUrl}/items/${oneDriveFolder}/children?select=id,name,thumbnailUrl&top=${maxResults}&skip=${startIndex}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.value) {
//           const fetchedImages = data.value.map((item) => ({
//             mediaId: item.id,
//             caption: item.name || "No caption",
//             thumbnail: item.thumbnailUrl,
//             mediaUrl: `${oneDriveBaseUrl}/items/${item.id}/content`,
//             type: "image",
//           }));
//           setImages(fetchedImages);
//           setLoading(false);
//         } else {
//           console.error("No images found in the OneDrive API response.");
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching images:", error);
//         setError(true);
//         setLoading(false);
//       });
//   }, [oneDriveBaseUrl, page]);

//   const allMedia = [...images];

//   if (loading) {
//     return <Spiner />;
//   }

//   if (error) {
//     return <StylishError />;
//   }

//   return (
//     <div className="media-gallery">
//       {allMedia.map((item) => (
//         <div key={item.mediaId} className="media-item">
//           <img src={item.mediaUrl} alt={item.caption} />
//           <div className="caption">{item.caption}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PersonalPhoto;
