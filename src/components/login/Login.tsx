import React, { useState } from "react";
import "./Login.css"
import axios from "axios";

async function userDataGet(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const userNameInput = document.getElementById("userName") as HTMLInputElement | null;
  const userSenhaInput = document.getElementById("userSenhaInput") as HTMLInputElement | null;

  const userUrl = "http://localhost:5002/api/auth/login";

  const userDataJson = {
    userName: userNameInput?.value,
    password: userSenhaInput?.value,
  };

  try {
    const response = await axios.post(userUrl, userDataJson);
    const dataUser: { token: string, isAdmin: boolean } = response.data;
    console.log(dataUser)
    localStorage.setItem("token", dataUser.token);

    if (dataUser.isAdmin) {
      window.location.href = "/homeAdm";
    } else {
      var idAluno = await axios.post("http://localhost:5002/api/User", {}, { headers: { Authorization: `Bearer ${dataUser.token}`  }});
      localStorage.setItem("idUsuario", idAluno.data)
      window.location.href = "/pi/homeAluno";
    }

  } catch (error) {
    console.error("Error fetching user data", error);
  }
}

function UserInput() {
  return (
    <div className="userInputMain">
      <div className="cardLogin">
        {<div className="circle"></div>}
        <form onSubmit={(e) => userDataGet(e)}>

          <div className="login-container">
            <div className="login-box">
              <div className="profile-icon"></div>
              <div className="userInputBody">
                <input type="text" placeholder="Nome" id="userName" className="input-field" />
              </div>
              <div className="userInputBody">
                <input type="password" placeholder="Senha" id="userSenhaInput" className="input-field" />
              </div>
              <br />
              <div className="button">
                <button type="submit" className="login-button">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInput
