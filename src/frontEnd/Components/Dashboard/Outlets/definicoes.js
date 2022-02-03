import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Definicoes() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Definicoes</h1>
            <button 
                style={{background: "lightgreen", height: "30pt", widtht: "50pt"}}
                onClick={() => {navigate("/dashboard/definicoes/adduser")}}
            >
                Novo Administrador
            </button>
            <Outlet/>
        </div>
    )
}

export default Definicoes
