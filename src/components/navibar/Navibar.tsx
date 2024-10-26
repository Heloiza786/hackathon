import React, { useEffect } from "react";
import "./Navibar.css";
import { Link } from "react-router-dom";
import { hostname } from "os";

function Navibar() {
  useEffect(() => {
    var hostName = document.location.pathname.split("/")[2];

    switch (hostName) {
  
      case "dadosAluno":
        var resultado =
          (document.getElementById("dadosAluno") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;
      case "materias":
        var resultado =
          (document.getElementById("materias") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;
      case "desempenho":
        var resultado =
          (document.getElementById("desempenho") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;

      default:
        break;
    }
  }, []);

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
              <Link className="nav-link" to="/" id="home"> dadosAluno</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user" id="user">Matérias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" id="products">Desmpenho</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
