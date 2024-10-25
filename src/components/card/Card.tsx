import React from "react";
import "./Card.css";

import plants from "../../imagem/Rectangle 34.png"


function Card() {
  return (
    <div>
      <div className="Container">
        <div className="Informacao">
           </div>
        <img className="ImagemHeading" src={plants} alt="imagem2" />

      </div>
    </div>
  );
}

export default Card;
