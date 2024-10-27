import React from "react";
import "./Login.css"
import axios from "axios";
import UserIput from "./Login";
import CardAcess from "../cardAcess/cardAcess";


async function userDataGet() {
  const userNameInput = document.getElementById("userName") as HTMLInputElement | null;
  const userSenhaInput = document.getElementById("userSenhaInput") as HTMLInputElement | null;

  const userUrl = "http://localhost:9000/api/users";

  const userDataJason = {
    userName: userNameInput?.value,
    password: userSenhaInput?.value,
  };

  try {
    const response = await axios.get(userUrl);
    const dataUser: Record<string, { name: string; password: string }> = response.data;

    const userArray = Object.entries(dataUser).map(([key, value]) => ({
      key,
      ...value,
    }));

    userArray.forEach((i) => {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
        <div>
          Nome: ${i.name}</br>
        </div>
        <div>
          Sobrenome: ${i.password}</br> 
        </div>
        </br>
      `;
      document.body.appendChild(newDiv);
    });
  } catch (error) {
    console.error("Error fetching user data", error);
  }
}

function UserInput() {
  return (
    <div className="userInputMain">
      <div className="cardLogin">
        {<div className="circle"></div> }
        <form onSubmit={(e) => { e.preventDefault(); userDataGet(); }}>

        <div className="login-container">
            <div className="login-box">
                <div className="profile-icon"></div>
                <form>
                    <div className="userInputBody">   
                        <input type="text" placeholder="Nome" id="userName" className="input-field" />
                    </div>
                    <div className="userInputBody">
                        <input type="password" placeholder="Senha" id="userSenhaInput" className="input-field" />
                    </div>
                    <br />
                    <div className="button">
                        <button type="button" onClick={CardAcess} className="login-button">Login</button>
                    </div>
                </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInput;
