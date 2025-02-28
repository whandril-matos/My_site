import React from "react";
import styles from "./FullPageCard.module.scss";

interface FullPageCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  iconSrc?: string;
}

const FullPageCard: React.FC<FullPageCardProps> = ({ title, subtitle, description, iconSrc }) => {
  return (
    <div className={styles.fullPageCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          {iconSrc && <img src={iconSrc} alt="User Icon" className={styles.profileIcon} />}
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className={styles.cardBody}>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default FullPageCard;
