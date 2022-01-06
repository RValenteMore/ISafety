import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../Services/api';

function Loja() {
    const [loja, setLoja] = useState({});
    const {id} = useParams();
    api.get(`/loja/:${id}`).then((loja) => {
        setLoja(loja.data)
    })
    return (
        <div>
            <h2>{loja.Nome}</h2>
            <h3>Loja: {loja.CodigoLoja}</h3>
            <p>
            Distrito: {loja.Distrito}<br/>
            Concelho: {loja.Concelho}<br/>
            Morada: {loja.Morada}<br/>
            Codigo Postal: {loja.CodigoPost}<br/>
            Ano de Abertura: {loja.AnoAbertur}<br/>
            Nivel de Risco: {loja.Nivel_risco}
            </p>
        </div>
    )
}

export default Loja;
