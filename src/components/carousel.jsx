import React, { useState, useEffect } from "react";
import "../css/Carousel.css";
import slide1 from "../../public/1.png";
import slide2 from "../../public/2.png";
import slide3 from "../../public/3.png";


const images = [slide1, slide2, slide3];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img src={images[index]} alt="carousel slide" className="carousel-image" />
      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
