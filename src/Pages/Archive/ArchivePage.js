// import "./ArchivePage.css";
// import React, { useState } from "react";
// import Header from "../../components/Banner/Header";
// import YouTubeVideo from "./YoutubeVideos/YTVideo";
// import InstagramVideo from "./Instagram/InstagramVideo";
//  import pdfData from "./Stories/pdfData.json";
// import PdfCard from "./Stories/pdfcard/PdfCard";

// const ArchivePage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const apiKey = "AIzaSyDNI-SXRLiDtjNArDaDpSc23aGUI_E11Jg";
//   const instaKey =
//     "IGQWRNd2k5OC1yMWRXMFFsYnRFLWsxZAnoxdHlDNVRNeDdvWnpzS00yZAHBfeXJnb1BtRk9fRWFWNVRlSnJ4S3JMVld4WHlQX3RiSlJqT3pFTTEwVWZAwOTUxR3pCZAFJKYkFZAb3RQQUZAMTFc3dkYtMnRfMGdNMXJ1SDgZD";
//   const channelId = "UC31aBZ8280jBRyEtk1pzzZg";
//   const currentPage = 1;

//   const categories = [
//     { name: "Instagram Photos", subcategories: [] },
//     { name: "YouTube Videos", subcategories: [] },
//     { name: "Writing Stories", subcategories: [] },
//   ];

//   const handleCategoryChange = (event) => {
//     const value = event.target.value;
//     if (value === "Choose one category") {
//       setSelectedCategory(null);
//     } else {
//       const category = categories.find((cat) => cat.name === value);
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <h1 className="headerArchive">Archive Page</h1>
//       <h2 className="Archive-desc">
//         you can see recent social media content here
//       </h2>
      
//       <div className="category-container">
//         <select id="category-select" onChange={handleCategoryChange}>
//           <option value="All">Choose one category</option>
//           {categories.map((category) => (
//             <option key={category.name} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
       
//       <div className="gallery">
//         {selectedCategory?.name === "YouTube Videos" && (
//           <YouTubeVideo
//             apiKey={apiKey}
//             channelId={channelId}
//             page={currentPage}
//           />
//         )}
//         {selectedCategory?.name === "Instagram Photos" && (
//           <InstagramVideo accessToken={instaKey} />
//         )}
//         {selectedCategory?.name === "Writing Stories" &&
//           pdfData.map((pdfInfo) => (
//             <PdfCard key={pdfInfo.title} {...pdfInfo} />
//           ))}
//       </div>
      
//     </div>
//   );
// };

// export default ArchivePage;
