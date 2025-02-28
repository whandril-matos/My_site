"use client";

import styles from "./Footer.module.scss";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

interface FooterProps {
  aboutTitle: string;
  aboutText: string;
  quickLinksTitle: string;
  quickLinks: { label: string; href: string }[];
  followUsTitle: string;
  socialLinks: {
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
  };
  copyrightText: string;
}

export default function Footer({
  aboutTitle,
  aboutText,
  quickLinksTitle,
  quickLinks,
  followUsTitle,
  socialLinks,
  copyrightText,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Seção Sobre */}
          <div className={styles.footerSection}>
            <h2>{aboutTitle}</h2>
            <p>{aboutText}</p>
          </div>

          {/* Seção Links Rápidos */}
          <div className={styles.footerSection}>
            <h2>{quickLinksTitle}</h2>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h2>{followUsTitle}</h2>
            <div className={styles.footerSocial}>
              {socialLinks.whatsapp && (
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className={styles.icon} />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className={styles.icon} />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={styles.icon} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerCopyright}>{copyrightText}</div>
      </div>
    </footer>
  );
}

//  como usar?
//  import Footer from "@/app/components/Footer";

// export default function Page() {
//   return (
//     <Footer
//       aboutTitle="Quem Somos"
//       aboutText="Oferecemos serviços de alta qualidade para sua casa e empresa."
//       quickLinksTitle="Navegação"
//       quickLinks={[
//         { label: "Home", href: "#start" },
//         { label: "Serviços", href: "#services" },
//         { label: "Contato", href: "#contact" },
//       ]}
//       followUsTitle="Nos acompanhe"
//       socialLinks={{
//         whatsapp: "https://wa.me/123456789",
//         facebook: "https://facebook.com/seuPerfil",
//         instagram: "https://instagram.com/seuPerfil",
//       }}
//       copyrightText="© 2025 Empresa XYZ - Todos os direitos reservados."
//     />
//   );
// }

