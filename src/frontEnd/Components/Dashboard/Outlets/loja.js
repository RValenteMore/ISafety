import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../Services/api";
import { Grid } from "@material-ui/core";

import Peixaria from "../../../Assets/DashBoard/peixaria.png";
import Talho from "../../../Assets/DashBoard/talho.png";
import Fescos from "../../../Assets/DashBoard/frescos.png";
import PadariaPastelaria from "../../../Assets/DashBoard/padaria_pastelaria.png";

function Loja() {
  const [loja, setLoja] = useState({});
  const [loading, setLoanding] = useState(0)
  const { id } = useParams();
  let rotaAPI = "loja/" + id.toString().substring(1);
  api.get(rotaAPI).then((loja) => {
    setLoja(loja.data);
    console.log(loja);
  });
  return (
    <div>
      <h2>{loja.Nome}</h2>
      <h3>Loja: {loja.CodigoLoja}</h3>
      <p>
        Distrito: {loja.Distrito}
        <br />
        Concelho: {loja.Concelho}
        <br />
        Morada: {loja.Morada}
        <br />
        Codigo Postal: {loja.CodigoPost}
        <br />
        Ano de Abertura: {loja.AnoAbertur}
        <br />
        Nivel de Risco: {loja.Nivel_risco}
      </p>

      {/**Secções coloridas*/}
      <Grid container md={12} className="seccoes">
        <Grid item className="peixaria">
          <img className="imgCartoes" src={Peixaria} />
          <h3 className="textoCartoes">Peixaria</h3>
          <p className="textoCartoes">Nivel de risco nas últimas horas</p>
          <h1 style={{ fontSize: 60, marginTop: 0 }} className="textoCartoes">
            45%
          </h1>
        </Grid>
        <Grid item className="talho">
          <img className="imgCartoes" src={Talho} />
          <h3 className="textoCartoes">Talho</h3>
          <p className="textoCartoes">Nivel de risco nas últimas horas</p>
          <h1 style={{ fontSize: 60, marginTop: 0 }} className="textoCartoes">
            45%
          </h1>
        </Grid>
        <Grid item className="frescos">
          <img className="imgCartoes" src={Fescos} />
          <h3 className="textoCartoes">Frescos</h3>
          <p className="textoCartoes">Nivel de risco nas últimas horas</p>
          <h1 style={{ fontSize: 60, marginTop: 0 }} className="textoCartoes">
            45%
          </h1>
        </Grid>
        <Grid item className="padariaPastelaria">
          <img className="imgCartoes" src={PadariaPastelaria} />
          <h3 className="textoCartoes" style={{ color: "white" }}>
            Padaria e Pastelaria
          </h3>
          <p className="textoCartoes" style={{ color: "white" }}>
            Nivel de risco nas últimas horas
          </p>
          <h1
            style={{ fontSize: 60, color: "white", marginTop: 0 }}
            className="textoCartoes"
          >
            45%
          </h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default Loja;
