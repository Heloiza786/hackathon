import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./cardAcess.css";
import iconUser from "../../imagem/image 1.png";

const CardAcess: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = (route: string) => {
        navigate(route);
    };

    const sections = [
        {
            title: "Dados do Aluno",
            description: "Informações pessoais do aluno",
            route: '/dadosAlunos' // Updated route
        },
        {
            title: "Sugestão",
            description: "Sugestões para melhor desempenho do aluno",
            route: '/sugestao'
        },
        {
            title: "Desempenho",
            description: "Desempenho do aluno completo e detalhado",
            route: '/desempenho'
        }
    ];

    return (
        <div className="cardSugestao"> 
            <div className="iconSugestao">
                <img src={iconUser} alt="Ícone de usuário" />
            </div>
            {sections.map(section => (
                <div key={section.title} className="quadro">
                    <label htmlFor={section.title.replace(/\s+/g, '-').toLowerCase()}>{section.title}</label>
                    <div>
                        {section.description}
                    </div>
                    <button type="button" onClick={() => handleButtonClick(section.route)}>Acesse aqui</button>
                </div>
            ))}
        </div>
    );
}

export default CardAcess;
