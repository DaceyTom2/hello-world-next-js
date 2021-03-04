import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ id, name, description, image, onCardClick }) {
  let handleCardClick = (e) => {
    onCardClick(e, id);
  };

  return (
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox"
      onClick={handleCardClick}
    >
      <div class="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
        <Image priority src={image} height={150} width={300} />
        <h2 class="tm-text-title">{name}</h2>
        <p class="tm-text">{description}</p>
      </div>
    </div>
  );
}
