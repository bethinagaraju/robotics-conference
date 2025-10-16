// CompanyCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  { src: 'uni01.png', alt: 'Company 1' },
  { src: 'uni2.png', alt: 'Company 2' },
  { src: 'uni3.png', alt: 'Company 3' },
  { src: 'uni4.png', alt: 'Company 4' },
  { src: 'uni5.png', alt: 'Company 5' },
  { src: 'uni6.png', alt: 'Company 6' },
  { src: 'uni7.png', alt: 'Company 7' },
  
  // Add more logos as needed
];



const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="my-10 px-4">

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <div className="bg-white shadow-md p-6 w-40 h-40 flex items-center justify-center">
              <img src={logo.src} alt={logo.alt} className="object-contain h-full w-full lazyload" />
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;
