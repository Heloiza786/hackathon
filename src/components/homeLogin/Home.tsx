import React from "react";
import Card from "../card/Card";

import Navibar from "../navibar/Navibar";
import Login from "../login/Login";
import Rodape from "../rodape/Rodape";

 
// import Fundo from "../../imagem/fundo.png";
// import '../Home.css'

function Home() {
  return (
    <div>
      <Navibar/>
      <Login />
      <Rodape />

    </div>
  
  );
}

export default Home;
