import React from 'react';
import Carousel from './components/Carousel';

function App() {
  const images = [
    '/images/eyes.jpg',
    '/images/faces.jpg',
    '/images/girlface.jpg',
  ];

  return (
    <div className="App">
      <h1>Image Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
