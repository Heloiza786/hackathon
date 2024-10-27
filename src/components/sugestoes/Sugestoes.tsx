import React from "react";
import "./Sugestoes.css";

function Sugestoes() {
  const sugestoes = [
    {
      titulo: "Organize um cronograma de estudos",
      descricao: "Defina horários fixos para estudar e fazer revisões, garantindo consistência.",
    },
    {
      titulo: "Faça anotações resumidas",
      descricao: "Simplifique o conteúdo em tópicos chave para facilitar a memorização e a revisão.",
    },
    {
      titulo: "Estabeleça metas semanais",
      descricao: "Determine pequenas metas de aprendizado para se manter motivado e avaliar o progresso.",
    },
    {
      titulo: "Estude em intervalos curtos",
      descricao: "Use técnicas como Pomodoro (25 min de estudo, 5 min de pausa) para manter o foco.",
    },
    {
      titulo: "Participe ativamente das aulas",
      descricao: "Faça perguntas e participe das discussões para reforçar o entendimento do conteúdo.",
    },
    {
      titulo: "Durma bem e cuide da saúde",
      descricao: "Uma boa noite de sono e alimentação saudável ajudam na concentração e memorização.",
    },
  ];

  return (
    <div className="sugestoes-container">

      <div className="cards-container">
        {sugestoes.map((sugestao, index) => (
          <div key={index} className="card">
            <div className="card-header">{sugestao.titulo}</div>
            <div className="card-body">{sugestao.descricao}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sugestoes;