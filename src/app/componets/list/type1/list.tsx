"use client";

import React from "react";
import styles from "./List.module.scss";

interface ListItem {
  id: number;
  title: string;
  description: string;
}

interface ListProps {
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item.id} className={styles.listItem}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
