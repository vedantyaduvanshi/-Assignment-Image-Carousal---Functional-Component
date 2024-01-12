import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevSlide} className="arrow-button">
        {'<'}
      </button>

      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />

      <button onClick={goToNextSlide} className="arrow-button">
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
