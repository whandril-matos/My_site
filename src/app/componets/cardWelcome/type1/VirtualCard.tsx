'use client';

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import styles from './stylere.module.scss';

interface VirtualCardProps {
  name: string;
  profession: string;
  imageUrl: string;
  message: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const VirtualCard: React.FC<VirtualCardProps> = ({
  name,
  profession,
  imageUrl,
  message,
  socialLinks,
}) => {
  return (
    <div className={styles.virtualCard}>
      <div className={styles.cardHeader}>
        <img
          src={imageUrl}
          alt={`Foto de ${name}`}
          className={styles.profileIcon}
        />
        <h2>{name}</h2>
        <p>{profession}</p>
      </div>
      <div className={styles.cardBody}>
        <p>{message}</p>
      </div>
      <div className={styles.cardFooter}>
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

export default VirtualCard;
