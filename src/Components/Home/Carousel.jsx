import React, { useEffect, useState } from "react";
// import slider_1 from '../../Static/Slider/slider_1.webp';
// import slider_2 from '../../Static/Slider/slide_2.jpg';
// import slider_3 from '../../Static/Slider/slide_3.jpg';
// import slider from '../../../public/Slider/slider_1.webp'
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/primespherepublication/Slider/slider_1.webp',
    '/primespherepublication/Slider/slide_2.webp',
    '/primespherepublication/Slider/slide_3.webp',
  ];
  

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return ( 
    <div className="relative w-full ">
      {/* Carousel Wrapper */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {console.log(slide)}
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover blur-[4px] brightness-50"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
        </span>
      </button> */}
    </div>
  );
};

export default Carousel;  