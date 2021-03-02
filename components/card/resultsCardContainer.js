import ResultsCard from "./resultsCard";
import styles from "./resultsCardContainer.module.css";

export default function ResultsCardContainer({ resultsCards }) {
  return (
    <div className={styles.cards}>
      {resultsCards.map(({ key, name, votes }) => (
        <ResultsCard id={key} name={name} votes={votes}></ResultsCard>
      ))}
    </div>
  );
}
