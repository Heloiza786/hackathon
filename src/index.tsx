import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homeLogin/Home";
import User from "./components/user/User";
import Error from "./components/erro/Error";
import ListarUsuario from "./components/listarUsuarios/ListarUsuario";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dadosAluno" element={<User />} />
        {/* <Route path="/materias" element={<Products />} /> */}
        {/* <Route path="/desempenho" element={<Sales />} /> */}
        {/* <Route path="/listarUsuario" element={<ListarUsuario />} />
        <Route path="/listarProdutos" element={<ListarProdutos />} />
        <Route path="/listarSales" element={<ListarSales />} /> */}
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
