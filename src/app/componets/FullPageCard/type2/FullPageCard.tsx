import React from "react";
import style from "./FullPageCardV1.module.scss";

interface FullPageCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  iconSrc?: string;
}

const FullPageCard : React.FC<FullPageCardProps> = ({
    title,
    subtitle,
    description,
    iconSrc,
  }) => {
  return (
    <div className={style.fullPageCard}>
      <div className={style.cardContent}>
        <div className={style.cardHeader}>
          <img
            src={iconSrc}
            alt="User Icon"
            className={style.profileIcon}
          />
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={style.cardBody}>
          <p>
          {description}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FullPageCard;
