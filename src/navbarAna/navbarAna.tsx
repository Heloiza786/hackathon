import React, { useEffect } from "react";
import "./navbarAna.css";
// import rodape from "../rodape/Rodape";

function NavibarAna() {

  return (
    <nav id="navbar">
        <i id="nav_logo">Performace Plus</i>

        <ul id="nav_list">
          <li className = "nav-item active">
            <a href="#Inicio">Inicío</a>
          </li>

          <li className="nav-item">
              <a href="#menu">Matérias</a>
          </li>

          <li className="nav-item">
            <a href="#menu">Desempenho</a>
          </li>
        </ul>
        <a href = " "><button className="btn-default">Dados do Aluno</button></a>
    </nav>
    
  );
}

export default NavibarAna;