import styles from "./Quote.module.scss";

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({ text, author }: QuoteProps) {
  return (
    <div className={styles.scolpe}>
        <blockquote className={styles.quote}>
            <p>“{text}”</p>
            <footer>- {author}</footer>
        </blockquote>
    </div>
    
  );
}
