import React from "react";
import "./DadosAluno.css"

const DadosAluno = () => {
  return (

    <div className="container">
      <div className="student-info">
        <h1 className="student-name">Nome do Aluno</h1>
      </div>

      <div className="form">
        <label>Email:</label>
        <input type="text" disabled />

        <label>Telefone 1:</label>
        <input type="text" disabled />

        <label>Telefone 2:</label>
        <input type="text" disabled />

        <label>Endereço:</label>
        <input type="text" disabled />

        <label>Série:</label>
        <input type="text" disabled />
      </div>

      <button className="back-button">Voltar</button>
    </div>
  );
};

export default DadosAluno;
