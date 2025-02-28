"use client";

import React from "react";
import styles from "./FeatureSection.module.scss";
import Link from "next/link";
import { FaRegCircle } from "react-icons/fa";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  buttonText: string;
  imageUrl: string;
  buttonLink: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  buttonText,
  imageUrl,
  buttonLink,
}) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.textContent}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <FaRegCircle className={styles.icon} /> {item}
            </li>
          ))}
        </ul>
        <p>{description}</p>
        <Link href={buttonLink}>
          <button className={styles.button}>{buttonText}</button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`Imagem relacionada a ${title}`} />
      </div>
    </section>
  );
};

export default FeatureSection;
