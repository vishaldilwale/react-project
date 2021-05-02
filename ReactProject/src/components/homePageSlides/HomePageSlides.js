import React from "react";
import Slider from "react-slick";

const HomePageSlider =({slides,showSlide,scrollSlide,responsiveSlider})=> {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: showSlide,
        slidesToScroll: scrollSlide,
        arrows:false,
        responsive: responsiveSlider && [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
      <div>
        <Slider {...settings}>
            {slides?.map((slide)=>{
                return(
                    <div>
                        <img style={{maxHeight:"100vh",width:"inherit"}} src={slide?.src} alt=""/>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  };
  export default HomePageSlider;
