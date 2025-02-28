// components/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  name: string;
  role: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  role,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}> {name}</h1>
        <h2 className={styles.role}>{role}</h2>
        <p className={styles.description}>{description}</p>
        <a href={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
