import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAlunos from "./components/homeAlunos/HomeAlunos";
import UserInput from "./components/login/Login";
import CardAcess from "./components/cardAcess/cardAcess";
import Error from "./components/erro/Error";
import NavBar from "./components/navBar/NavBar";
import DadosAluno from "./components/dadosAluno/DadosAluno";
import Graphs from "./components/desempenho/Desempenho";
// import CardAcess from "./components/cardAcess/cardAcess";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pi">
      <Routes>
        <Route path="/login" element={<UserInput/>} />
        <Route path="/homeAlunos" element={<HomeAlunos/>} />
        <Route path="/DadosAluno" element={<DadosAluno/>} />
        <Route path="/graficos" element={<Graphs />} />
        {/* <Route path="/rotaPrincipal" element={<CardAcess />} /> */}
   

        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
