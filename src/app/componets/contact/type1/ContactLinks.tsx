'use client';


import React, { useState } from "react";
import { 
  FaLinkedin, FaGithub, FaInstagram, FaYoutube, 
  FaEnvelope, FaPhone, FaCheck 
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import styles from "./ContactLinks.module.scss";

interface ContactLinksProps {
  title?: string;
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
  youtube: string;
  email: string;
  phone: string;
  copyMensage: string;
  emailTextDefaut?: string;
  phoneTextDefaut?: string;
  copyOn: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ title, linkedin, github, twitter, instagram, youtube, email, phone, copyMensage,  emailTextDefaut, phoneTextDefaut, copyOn }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 3000); // Reseta a mensagem após 2 segundos
  };

  const contacts = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: linkedin },
    { name: "GitHub", icon: <FaGithub />, url: github },
    { name: "X", icon: <FaSquareXTwitter  />, url: twitter },
    { name: "Instagram", icon: <FaInstagram />, url: instagram },
    { name: "YouTube", icon: <FaYoutube />, url: youtube },
  ];

  return (
    <div className={styles.contactContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.contactGrid}>
        {contacts.map((contact, index) => (
          <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            {contact.icon}
            <span>{contact.name}</span>
          </a>
        ))}

        {/* Botão de copiar e-mail */}
        <button className={styles.contactItem} onClick={() => copyToClipboard(email, "email")}>
          {copied === "email" ? <FaCheck className={styles.successIcon} /> : <FaEnvelope />}
          <span>{copied === "email" ? copyOn : emailTextDefaut}</span>
        </button>

        {/* Botão de copiar telefone */}
        <button className={styles.contactItem} onClick={() => copyToClipboard(phone, "phone")}>
          {copied === "phone" ? <FaCheck className={styles.successIcon} /> : <FaPhone />}
          <span>{copied === "phone" ? copyOn : phoneTextDefaut}</span>
        </button>
      </div>

      {/* Mensagens de confirmação */}
      {copied === "email" && <p className={styles.copiedMessage}>📋 {email} {copyMensage}</p>}
      {copied === "phone" && <p className={styles.copiedMessage}>📋 {phone} {copyMensage}</p>}
    </div>
  );
};

export default ContactLinks;
