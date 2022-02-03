import { colors } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userList } from "../../../Assets/users.js";

function AddUser() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [registoErro, setRegistoErro] = useState(0);

  function isUsernameAvaible() {
    const currentUser = userList.find((x) => x.username === user.username);
    if (currentUser !== undefined) {
      setRegistoErro(1);
      setTimeout(() => {
        setRegistoErro(0);
      }, 2000);
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <h3>Nome de utilizador</h3>
      <input
        value={user.username}
        onChange={(event) => setUser({ ...user, username: event.target.value })}
      />
      <h3>Password</h3>
      <input
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />
      <button
        onClick={() => {
          if (isUsernameAvaible()) {
            userList.push(user);
            alert(user.username + "criado com Sucesso");
            navigate("/dashboard/definicoes");
          }
        }}
      >
        Adicionar
      </button>
    <p style={{
        opacity: registoErro,
        color: "red"        
        }}>Este username já existe!</p>
    </div>
  );
}

export default AddUser;
