"use client";

import React from "react";
import styles from "./FeatureSection.module.scss";
import { FaRegCircle } from "react-icons/fa";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  imageUrl: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  imageUrl,
}) => {

  return (
    <section className={styles.featureSection}>
      <div className={styles.imageContainer}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <img src={imageUrl} alt="Feature Image" />
      </div>
      <div className={styles.textContent}>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <FaRegCircle />
              </div>
              {item}
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default FeatureSection;
