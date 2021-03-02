import Image from "next/image";
import styles from "./resultsCard.module.css";

export default function ResultsCard({ id, name, votes }) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h1>{name}</h1>
        </div>
        <div className={styles.flipCardBack}>
          <h1>{name}</h1>
          <p>{votes}</p>
        </div>
      </div>
    </div>
  );
}
