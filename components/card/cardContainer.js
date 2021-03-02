import Card from "./card";
import styles from "./cardContainer.module.css";

export default function CardContainer({ votingCards, onCardClick }) {
  console.log(votingCards)
  return (
    <div className={styles.cards}>
      {votingCards.map(({ key, name, description, image }) => (
        <Card id={key} name={name} description={description} image={image} onCardClick={onCardClick} ></Card>
      ))}
    </div>
  );
}
