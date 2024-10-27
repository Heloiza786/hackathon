import React from "react";
import "./UserInput.css";
import axios from "axios";
import UserIput from '../userInput/UserInput';
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
        {/* <div className="circle"></div> */}
        <form onSubmit={(e) => { e.preventDefault(); userDataGet(); }}>

          <div className="userInputBody">
            <label>Nome:</label>
            <input type="text" placeholder="Nome" id="userName" />
          </div>
          <div className="userInputBody">
            <label>Senha:</label>
            <input type="password" placeholder="Senha" id="userSenhaInput" />
          </div>
          <br />
          <div className="button">
            <button type="button" onClick={CardAcess}>Login</button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default UserInput;
