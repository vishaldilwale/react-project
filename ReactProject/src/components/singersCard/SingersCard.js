import React from "react";
import Slider from "react-slick";

const SingersCard = ({ slides }) => {
  return (
    <div className="d-flex bg-transparent text-white" >
      {slides?.map((slide) => {
        return (
          <div style={{maxWidth:"120px",maxHeight:"300px"}} className="mr-3" key={slide?.title}>
            <div>
              <img
                style={{
                  height: "180px",
                  minHeight: "180px",
                  width: "120px",
                  minWidth: "120px",
                  borderRadius: "20px",
                }}
                src={slide?.src}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SingersCard;
