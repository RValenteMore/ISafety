import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Definicoes() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Definicoes</h1>
            <button 
                style={{background: "#5EB6A0", height: "30pt", widtht: "50pt"}}
                onClick={() => {navigate("/dashboard/definicoes/adduser")}}
            >
                <h5 style={{margin: 0, color: "#335675"}}>Novo Administrador</h5>
            </button>
            <Outlet/>
        </div>
    )
}

export default Definicoes
