import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ id, name, description, image, onCardClick }) {
  let handleCardClick = (e) => {
    onCardClick(e, id);
  };

  return (
    <div className={styles.flipCard} onClick={handleCardClick} id={id}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image priority src={image} height={140} width={150} />
          <p>{name}</p>
        </div>
        <div className={styles.flipCardBack}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
