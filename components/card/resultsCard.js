import Image from "next/image";
import styles from "./resultsCard.module.css";

export default function ResultsCard({ id, name, votes }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1>{name}</h1>
        <p>{votes}</p>
      </div>
    </div>
  );
}
