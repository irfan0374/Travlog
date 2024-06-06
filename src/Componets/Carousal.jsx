import React, { useState } from 'react';
import banner1 from '/Banner1.png'
import banner2 from '/Banner2.png'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banner1, banner2];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='carousel w-[55vh] h-[50vh] mx-1 md:w-[60vh] md:mx-20 md:h-[50vh] lg:w-[90vh] lg:h-[80vh] rounded-xl overflow-hidden relative'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={handlePrev} className="btn btn-circle">❮</button>
        <button onClick={handleNext} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default Carousel;
