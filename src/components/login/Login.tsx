import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="cardLogin">
            <div className="circle"></div>
            <div className="nome">
                <label htmlFor="username">Nome:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="senha">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </div>
    );
}

export default Login;
