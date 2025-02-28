"use client";

import React from "react";
import styles from "./FeatureSection.module.scss";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  buttonText: string;
  buttonText2: string;
  imageUrl: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  buttonText,
  buttonText2,
  imageUrl,
}) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.textContent}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <GiConfirmed className={styles.iconL} /> {item}
            </li>
          ))}
        </ul>
        <p>{description}</p>
        <div className={styles.bottomBox}>
          <button>
            {buttonText} <FaWhatsapp className={styles.icon} />
          </button>
          <button className={styles.bt2}>
            {buttonText2} <FaPhone className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Feature Image" />
      </div>
    </section>
  );
};

export default FeatureSection;
