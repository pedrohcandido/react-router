import React from "react";
import Slider from "react-slick";
import './Slick.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
	const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
				<div>
					<img src={"src/assets/images/reactJs2.png"} />
        </div>
        <div>
					<img src={"src/assets/images/logo192.png"} />
        </div>
        <div>
					<img src={"src/assets/images/reactJS.png"} />
        </div>
        <div>
					 <img src={"src/assets/images/reactjs3.png"} />
        </div>
      </Slider>
    </div>
  );
}