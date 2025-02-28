"use client";

import React from "react";
import styles from "./CardList.module.scss";

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardListProps {
  items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className={styles.cardList}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
