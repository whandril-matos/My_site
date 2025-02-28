"use client"
import React, { useState } from "react";
import styles from "./ContinuousCarousel.module.scss";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const ResponsiveCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      {/* Track do carrossel */}
      <div className={styles["carousel-track"]} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
  {items.map((item) => (
    <div key={item.id} className={styles["carousel-slide"]}>
      <img src={item.image} alt={item.title} className={styles["carousel-image"]} />
      <div className={styles["carousel-title"]}>{item.title}</div>
    </div>
  ))}
</div>


      {/* Botões de navegação */}
      <button
        className={`${styles["carousel-btn"]} ${styles["btn-prev"]}`}
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className={`${styles["carousel-btn"]} ${styles["btn-next"]}`}
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Indicadores */}
      <div className={styles["carousel-indicators"]}>
        {items.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
