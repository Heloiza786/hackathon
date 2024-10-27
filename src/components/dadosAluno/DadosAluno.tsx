import React from 'react';
import './DadosAluno.css';

const AlunoData: React.FC = () => {
  return (
    <div className="aluno-data">
      <header className="navbar">
        <span className="navbar-item">Início</span>
        <span className="navbar-item">Sugestões</span>
        <span className="navbar-item">Desempenho</span>
        <button className="navbar-item active">Dados do Aluno</button>
      </header>

      <div className="aluno-info">
        <div className="aluno-avatar"></div>
        <h1>Nome do Aluno - MATRÍCULA</h1>

        <form className="aluno-form">
          <label>Email:</label>
          <input type="text" placeholder="Email:" disabled />

          <label>Telefone 1:</label>
          <input type="text" placeholder="Telefone 1: " disabled />

          <label>Telefone 2:</label>
          <input type="text" placeholder="Telefone 2: " disabled />

          <label>Endereço:</label>
          <input type="text" placeholder="Endereço: " disabled />

          <label>Série:</label>
          <input type="text" placeholder="Série: " disabled />
        </form>

        <button className="back-button">Voltar</button>
      </div>
    </div>
  );
};

export default AlunoData;
