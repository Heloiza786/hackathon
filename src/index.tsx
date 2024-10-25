import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Sales from "./components/sales/Sales";
import User from "./components/user/User";
import Error from "./components/erro/Error";
import ListarUsuario from "./components/listarUsuarios/ListarUsuario";
import ListarProdutos from "./components/listarProdutos/ListarProdutos";
import ListarSales from "./components/listarSales/ListarSales";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/listarUsuario" element={<ListarUsuario />} />
        <Route path="/listarProdutos" element={<ListarProdutos />} />
        <Route path="/listarSales" element={<ListarSales />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
