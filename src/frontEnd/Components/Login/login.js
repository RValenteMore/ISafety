import React, { useState } from 'react'
import "./login.css";
import { Grid, Paper } from "@material-ui/core";
import { userList } from '../../Assets/users.js';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState(0);
    const navigate = useNavigate();


    function verifyUser(){        
        console.log(userList);
        const currentUser = userList.find(
            (x) =>
              x.username === username && x.password === password
        );
        if (currentUser === undefined) {
            setErro(100);
            setTimeout(() => {
              setErro(0);
            }, 2000);
            return false; 
        } else {
            navigate('antigo');
            return true;
          }      
    }
    return (
        <div>
            <Grid container>
                <Grid item direction="column" md={2} className="verticalNavBar"></Grid>
                <Grid item direction="column" md={10} className="conteudo">
                    <Paper className='login'>
                        <h2>Login</h2>
                        <h4>Email:</h4>
                        <input 
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                        />
                        <h4>Palavra-passe:</h4>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                        <button onClick={() => navigate('/')}>
                            Login
                        </button>
                        <a style={{
                            color: "red",
                            opacity: erro,
                            marginBottom: 10,              
                        }}>
                            <br/>
                            Username ou password incorretos!
                        </a>                  
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
