import React from "react";
import Card from "../card/Card";

import Navibar from "../navibar/Navibar";
import Carrossel from "../carrousel/Carrossel";
import Rodape from "../rodape/Rodape";
// import Fundo from "../../imagem/fundo.png";
// import '../Home.css'

function Home() {
  return (
    <div>
      <Navibar/>
      <Carrossel />
      <Rodape />
    </div>
  
  );
}

export default Home;
