import React from 'react';
import './App.css';
import Carousel from './Carousel';
import camel from './images/camel.jpg';
import bird from './images/bird.jpg';
import fly from './images/fly.jpg';
import moon from './images/moon.jpg';

import lions from './images/lions.jpg';

function App() {
  const data = [camel, bird, fly, moon, lions];
  return (
    <div className="App">
      <Carousel images={data} />
    </div>
  );
}

export default App;
