import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Header from "../../components/Banner/Header";
import YTDatas from "./YoutubeVideos/YTDatas.json";
import InstagramDatas from "./Instagram/InstaData";
import YouTubeVideo from "./YoutubeVideos/YTVideo";
const ArchivePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [shortStories, setShortStories] = useState([]);
  const [Videos, setVideos] = useState(YTDatas);
  const [Instagram, setInstagram] = useState(InstagramDatas);

  const categories = [
    { name: "Instagram Photos", subcategories: [], items: InstagramDatas },
    {
      name: "Writings",
      subcategories: [{ name: "Short Stories", items: shortStories }],
      items: shortStories,
    },
    {
      name: "YouTube Videos",
      subcategories: [],
      items: Videos,
    },
  ];

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (value === "All") {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      const category = categories.find((cat) => cat.name === value);
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategoryChange = (event) => {
    const value = event.target.value;
    if (value === "All") {
      setSelectedSubcategory(null);
    } else {
      const subcategory = selectedCategory.subcategories.find(
        (subcat) => subcat.name === value
      );
      setSelectedSubcategory(subcategory);
    }
  };

  const filteredItems = selectedSubcategory
    ? selectedSubcategory.items
    : selectedCategory
    ? selectedCategory.items
    : categories.reduce((acc, cur) => [...acc, ...cur.items], []);

  return (
    <div>
      <Header />

      <h1>Archive Page</h1>
      <div>
        <label htmlFor="category-select">Category:</label>
        <select id="category-select" onChange={handleCategoryChange}>
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {selectedCategory && selectedCategory.subcategories.length > 0 && (
          <select onChange={handleSubcategoryChange}>
            <option value="All">All</option>
            {selectedCategory.subcategories.map((subcategory) => (
              <option key={subcategory.name} value={subcategory.name}>
                {subcategory.name}
              </option>
            ))}
          </select>
        )}
      </div>

     

      <div className="gallery">
        {filteredItems.map((item) => (
          <div key={item.title} className="gallery-item">
            {selectedCategory?.name === "YouTube Videos" ? (
              <YouTubeVideo videoUrl={item.videoUrl} />
            ) : (
              <>
                <LazyLoad height={200} once>
                  <img src={item.thumbnailUrl} alt={item.title} />
                </LazyLoad>
                <h2>{item.title}</h2>
              </>
            )}
            <p>{item.description}</p>
            {item.link && <a href={item.link}>Read more</a>}
            {item.videoUrl && <a href={item.videoId}>Watch now</a>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArchivePage;
