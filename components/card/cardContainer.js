import Card from "./card";
import styles from "./cardContainer.module.css";

export default function CardContainer({ votingCards }) {
  return (
    <div className={styles.cards}>
      {votingCards.map(({ key, name, description, image }) => (
        <Card name={name} description={description} image={image}></Card>
      ))}
    </div>
  );
}
