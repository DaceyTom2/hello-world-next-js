import Image from "next/image";
import styles from "./card.module.css";

export default function Card({name, description, image}) {
  console.log(image)
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image
            priority
            src={image}
            height={140}
            width={150}
          />
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