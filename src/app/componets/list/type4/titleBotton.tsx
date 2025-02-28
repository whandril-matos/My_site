import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

export default function Card({ title, description, buttonText, link }: CardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Link href={link} className={styles.button}>
        {buttonText}
      </Link>
    </div>
  );
}


