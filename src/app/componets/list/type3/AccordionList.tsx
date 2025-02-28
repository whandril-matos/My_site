"use client"
import React, { useState } from "react";
import styles from "./AccordionList.module.scss";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionListProps {
  items: AccordionItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionList}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.accordionItem}>
          <button className={styles.accordionTitle} onClick={() => toggleItem(index)}>
            {item.title}
            <span className={`${styles.arrow} ${activeIndex === index ? styles.up : styles.arrowDown}`}>▼</span>
          </button>
          <div className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ""}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
