"use client"
import React, { useState } from "react";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  items: { id: number; image: string; title: string }[]; // Array de itens do carrossel
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.prev}`} onClick={handlePrev}>
        &#10094;
      </button>

      <div
        className={styles.carouselContent}
        style={{ "--current-index": currentIndex } as React.CSSProperties}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <button className={`${styles.next}`} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;