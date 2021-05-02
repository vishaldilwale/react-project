import React from "react";
import Slider from "react-slick";

const VideoCard = ({ slides }) => {
  return (
    <div className="d-flex bg-transparent text-white" >
      {slides?.map((slide) => {
        return (
          <div style={{maxWidth:"180px",maxHeight:"300px"}} className="mr-3 text-left" key={slide?.title}>
            <div>
              <img
                style={{
                  height: "100px",
                  minHeight: "100px",
                  width: "160px",
                  minWidth: "160px",
                  borderRadius: "20px",
                }}
                src={slide?.src}
                alt=""
              />
              <p className="mb-0" style={{ fontSize: "12px" }}>Some text (Official video)</p>
              <p className="mb-0" style={{ fontSize: "12px" }}>Video Youtube</p>
              <div
                className="d-flex align-items-center"
              >
                <img
                  alt=""
                  src={slide?.src}
                  style={{
                    borderRadius: "50%",
                    minHeight: "24px",
                    minWidth: "24px",
                    height: "24px",
                    width: "24px",
                    border: "2px solid red",
                  }}
                />
                <p className="mx-2 mb-0" style={{ fontSize: "12px" }}>
                  5M
                </p>
                <i class="fas fa-shopping-cart mr-2"/>
                <p className="mb-0">|</p>
                <p className="mx-2 mb-0" style={{ fontSize: "12px" }}>
                  91M views
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default VideoCard;
