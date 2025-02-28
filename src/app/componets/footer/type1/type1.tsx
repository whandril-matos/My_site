import styles from "./Footer.module.scss";

interface FooterProps {
  title: string;
  address: string;
  phone: string;
  email: string;
  addressT: string;
  phoneT: string;
  emailT: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Footer({
  title,
  address,
  phone,
  email,
  addressT,
  phoneT,
  emailT,
  imageSrc,
  imageAlt,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <p><strong>{addressT}</strong> {address}</p>
          <p><strong>{phoneT}</strong> {phone}</p>
          <p><strong>{emailT}</strong> {email}</p>
        </div>
        <div className={styles.image}>
          <img src={imageSrc} alt={imageAlt} className={styles.image}/>
        </div>
      </div>
    </footer>
  );
}
