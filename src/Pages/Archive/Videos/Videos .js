// import React, { useState, useEffect, useCallback } from "react";
// import styled from "styled-components";
// import { motion, AnimatePresence } from "framer-motion";
// import VideoData from "./VideoData";

// const Videos = ({ searchQuery, sortOrder }) => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null);

//   useEffect(() => {
//     let filteredData = VideoData.filter(
//       (item) =>
//         item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description?.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setVisibleItems(filteredData.slice(0, 6));
//   }, [searchQuery]);

//   const loadMoreItems = useCallback(() => {
//     setVisibleItems((prevItems) => [
//       ...prevItems,
//       ...VideoData.slice(prevItems.length, prevItems.length + 6),
//     ]);
//   }, []);

//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       if (
//         window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 50
//       ) {
//         loadMoreItems();
//       }
//     }
//     setLastScrollY(currentScrollY);
//   }, [lastScrollY, loadMoreItems]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const handleThumbnailClick = (id) => {
//     setPlayingVideo(id);
//   };

//   return (
//     <VideosContainer>
//       <AnimatePresence>
//         {visibleItems.map((item, index) => (
//           <VideoCard
//             key={item.id}
//             type={item.type}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
           
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//            >
            
              
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={item.videoUrl}
//                   title={item.title}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
              
             
//             <YearBadge>
//               <VideoTitle>{item.title}</VideoTitle>
//               {item.date}
//             </YearBadge>
//           </VideoCard>
//         ))}
//       </AnimatePresence>
//     </VideosContainer>
//   );
// };

// export default Videos;

// const VideosContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
//   padding: 10px;
  
//   .size0 {
//     grid-row: span 2;
//     grid-column: span 2;
//   }

//   .size1, .size2, .size3, .size4 {
//     grid-row: span 1;
//     grid-column: span 1;
//   }

//   .size5 {
//     grid-row: span 2;
//     grid-column: span 1;
//   }
// `;

// const VideoCard = styled(motion.div)`
//   background: #1c1c1c;
//   border-radius: 10px;
//   overflow: hidden;
//   max-width: 300px;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   position: relative;
//   cursor: pointer;

//   ${(props) =>
//     props.type === "reel" &&
//     `
//     max-width: 400px;
//     video {
//       height: 500px;
//     }
//     iframe {
//       height: 500px;
//     }
//   `}
// `;

// const Thumbnail = styled.img`
//   width: 100%;
//   height: ${(props) => props.height}px;
//   object-fit: cover;
// `;

// const VideoTitle = styled.h3`
//   margin: 0;
//   font-size: 1.5rem;
//   color: #fff;
// `;

// const YearBadge = styled.div`
//   position: absolute;
//   top: 10px;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 0.8rem;
//   z-index: 3;
// `;
