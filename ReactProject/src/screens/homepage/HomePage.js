import React, { useState } from "react";
import BottomNavbar from "../../components/bottomNavbar/BottomNavbar";
import HomePageSlider from "../../components/homePageSlides/HomePageSlides";
import SearchBar from "../../components/searchBar/SearchBar";
import SingersCard from "../../components/singersCard/SingersCard";
import VideoCard from "../../components/videoCard/VideoCard";
import homePageImages from "../../constants/homePageImages";
import categories from "../../constants/categories"
import "./homePage.css";

let HomePage = () => {
  let [activeLink, setActiveLink] = useState("Popular");
  return (
    <React.Fragment>
        <SearchBar/>
      <div>
        <HomePageSlider
          responsiveSlider={false}
          slides={homePageImages}
          showSlide={1}
          scrollSlide={1}
        />
      </div>
      <div className="slidersSection pl-2">
        <h4
          className="text-white text-left mr-2 mb-0"
          style={{ position: "relative", fontWeight: "600" }}
        >
          Watch Now
        </h4>
        <div className="categoryLinks d-flex ">
          {categories.map(
            (category) => {
              return (
                <p
                  className={
                    activeLink === category ? "activeLinkText" : "linkText"
                  }
                  onClick={() => setActiveLink(category)}
                >
                  {category}
                </p>
              );
            }
          )}
        </div>
        <div className="videoSlides">
          <VideoCard slides={homePageImages} />
        </div>
        <div className="singersSlideSection mt-2 mb-5">
          <h2
            className="text-white text-left mx-2"
            style={{ position: "relative", fontWeight: "800" }}
          >
            Latest
          </h2>
          <div className="singersSlide">
            <SingersCard slides={homePageImages} />
          </div>
        </div>
      </div>
      <div>
        <BottomNavbar />
      </div>
    </React.Fragment>
  );
};
export default HomePage;
