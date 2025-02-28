import React from 'react';
import Image from 'next/image';
import styles from './IconCard.module.scss';
import Head from 'next/head'

interface IconCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    
    <div className={styles.card}>
        <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={imageAlt} width={200} height={200} className={styles.image} priority />
      </div>
    </div>
  );
};

export default IconCard;

// how to use
// <IconCard 
//   title="Desenvolvimento" 
//   description="Criação de aplicações web modernas e responsivas." 
//   imageUrl="/images/dev-icon.png" 
//   imageAlt="Ícone de Desenvolvimento" 
// />