import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homeLogin/Home";
import UserInput from "./components/userInput/UserInput";
import CardAcess from "./components/cardAcess/cardAcess";
import Error from "./components/erro/Error";
import NavibarAna from "./navbarAna/navbarAna";

// import CardAcess from "./components/cardAcess/cardAcess";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pi">
      <Routes>
        <Route path="/dadosAluno" element={<Home />} />
        <Route path="/dadosAlunos" element={<UserInput />} />
    
        <Route path="/homeAluno" element={<CardAcess />} />
       
        
        {/* <Route path="/rotaPrincipal" element={<CardAcess />} /> */}
   

        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
