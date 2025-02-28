import React, { useState } from "react";
import { 
  FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube, 
  FaEnvelope, FaPhone, FaCheck 
} from "react-icons/fa";
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
}

const ContactLinks: React.FC<ContactLinksProps> = ({ title, linkedin, github, twitter, instagram, youtube, email, phone }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000); // Reseta a mensagem após 2 segundos
  };

  const contacts = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: linkedin },
    { name: "GitHub", icon: <FaGithub />, url: github },
    { name: "Twitter", icon: <FaTwitter />, url: twitter },
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
          <span>{copied === "email" ? "Copiado!" : "Copiar E-mail"}</span>
        </button>

        {/* Botão de copiar telefone */}
        <button className={styles.contactItem} onClick={() => copyToClipboard(phone, "phone")}>
          {copied === "phone" ? <FaCheck className={styles.successIcon} /> : <FaPhone />}
          <span>{copied === "phone" ? "Copiado!" : "Copiar Telefone"}</span>
        </button>
      </div>

      {/* Mensagens de confirmação */}
      {copied === "email" && <p className={styles.copiedMessage}>📋 {email} copiado para a área de transferência!</p>}
      {copied === "phone" && <p className={styles.copiedMessage}>📋 {phone} copiado para a área de transferência!</p>}
    </div>
  );
};

export default ContactLinks;
