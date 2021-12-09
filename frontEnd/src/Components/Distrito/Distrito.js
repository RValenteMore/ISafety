import React from 'react'

function Distrito(props) {
    return (
        <div>
            <h1 style={style.titulo}>Distrito de Braga</h1>
            <p>Mais Coisas</p>
        </div>
    )
}

export default Distrito

const style = {
    titulo: {
        marginTop: 0,
        marginBottom: 15,
        color: "white",
    }
}