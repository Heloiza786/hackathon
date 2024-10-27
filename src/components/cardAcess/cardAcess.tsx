import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./cardAcess.css";
import iconUser from "../../imagem/image 1.png";

function CardAcess() {
    return (
        <div className="dashboard">
          <div className="cards-container">
            <div className="card">
              <div className="icon">👤</div>
              <h2>Dados do Aluno</h2>
              <p>Informações pessoais do aluno</p>
              <button className="access-button">Acesse aqui</button>
              {/* <a href={section.route} className="button">Acesse aqui</a> */}
            </div>
            <div className="card">
              <div className="icon">💬</div>
              <h2>Sugestões</h2>
              <p>Sugestões para melhor desempenho do aluno</p>
              <button className="access-button">Acesse aqui</button>
            </div>
            <div className="card">
              <div className="icon">📈</div>
              <h2>Desempenho</h2>
              <p>Desempenho do aluno completo e detalhado</p>
              <button className="access-button">Acesse aqui</button>
            </div>
          </div>
        </div>
      );
}

export default CardAcess;
