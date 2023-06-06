import React, { useState } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsFillCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleInterval() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  setInterval(handleInterval, 3000);

  return (
    <>
      <div className="box">
        <div>
          <RiArrowLeftSLine
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
            className="left-arrow"
          />
          <img src={images[currentIndex]} alt="one" height="350px" />
          <RiArrowRightSLine
            className="right-arrow"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          />
        </div>

        {images.map((image, index) => {
          if (index === currentIndex) {
            return (
              <BsFillCircleFill
                onClick={() => setCurrentIndex(index)}
                className="circle"
              />
            );
          } else {
            return (
              <BsCircle
                onClick={() => setCurrentIndex(index)}
                className="circle"
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default Carousel;
