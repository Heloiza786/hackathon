import React, { useEffect } from "react";
import "../navibar/Navibar.css";
import { Link, useLocation } from "react-router-dom";

function Navibar() {
  const location = useLocation();

  useEffect(() => {
    // Remove a classe "Link" de todos os links antes de adicionar ao atual
    const linkElements = document.querySelectorAll(".nav-link");
    linkElements.forEach(link => link.classList.remove("Link"));

    // Adiciona a classe "Link" ao link ativo com base na rota atual
    const currentPath = location.pathname.split("/")[1];
    const currentLink = document.getElementById(currentPath);
    if (currentLink) {
      currentLink.classList.add("Link");
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Icon</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dadosAluno" id="dadosAluno">dadosAluno</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/materias" id="materias">Matérias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/desempenho" id="desempenho">Desempenho</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
