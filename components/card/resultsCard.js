import Image from "next/image";
import styles from "./resultsCard.module.css";

export default function ResultsCard({ id, name, votes }) {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
      <div class="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
        <i class="fa fa-4x fa-pagelines tm-home-fa"></i>
        <h2 class="tm-text-title">{name}</h2>
        <p class="tm-text">{votes}</p>
      </div>
    </div>
  );
}
