// ResponsiveCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };



  return (
    <div className="max-w-screen-xl mx-auto mt-8 relative">
      <Slider {...settings}>
        {/* Your carousel items go here */}
        <div className="w-full h-80">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" // Adjust the image URL and dimensions
            alt="Carousel Item 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-80">
          <img
            src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" // Adjust the image URL and dimensions
            alt="Carousel Item 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-80">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s" // Adjust the image URL and dimensions
            alt="Carousel Item 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-80">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" // Adjust the image URL and dimensions
            alt="Carousel Item 2"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more items as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
