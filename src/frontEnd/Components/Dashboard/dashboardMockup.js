import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./dashboardMockup.css";
import { NavLink, Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Root: {
    flexGrow: 1,
  },

  Mapa: {
    marginTop: 50,
    marginBottom: 10,
    marginRight: 10,

    height: theme.spacing(72.5),
  },

  TaxaIncidenciaGeral: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 20,

    height: theme.spacing(35),
  },

  NivelRiscoGeral: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,

    height: theme.spacing(35),
  },

}));

function DashboardMockup() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.Root}>
        <Grid item direction="column" md={2} className="verticalNavBar">
          <ul>
            <li className="selecionado">
              <NavLink
                to="/"
              >
                Sonae - Todas
              </NavLink>
            </li>
            <li>
              <NavLink className="nSelecionado"
                to="/continentes"
              >
                Sonae - Continente
              </NavLink>
            </li>
            <li>
              <NavLink className="nSelecionado"
                to="/bomdia"
              >
                Sonae - Bom Dia
              </NavLink>
            </li>
            <li>
              <NavLink className="nSelecionado"
                to="/entrepostos"
              >
                Sonae - Entrepostos
              </NavLink>
            </li>
            <li>
              <NavLink className="nSelecionado"
                to="/historico"
              >
                Histórico
              </NavLink>
            </li>
            <li>
              <NavLink className="nSelecionado"
                to="/definicoes"
              >
                Definições
              </NavLink>
            </li>
          </ul>
        </Grid>

        {/**Container da Diteita */}
        <Grid item direction="row" md={10} className="rightContainer">
          
          
          {/*Barra do Topo*/}
          <Grid item md={12}>
            <div className="topBar">
              <input className="search"/>
              <button className="searchBtn">
                Pesquisar
              </button>
            </div>
          </Grid>

          
          {/**Conteúdo*/}
          <Outlet/>

          {/**Secções coloridas*/}
          <Grid container md={12} className="seccoes">
            <Grid item className="peixaria">
              <h3 className="textoCartoes">Peixaria</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
            </Grid>
            <Grid item className="talho">
              <h3 className="textoCartoes">Peixaria</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
            </Grid>
            <Grid item className="frescos">
              <h3 className="textoCartoes">Peixaria</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
            </Grid>
            <Grid item className="padariaPastelaria">
              <h3 className="textoCartoes" style={{ color: "white" }}>
                Peixaria
              </h3>
              <p className="textoCartoes" style={{ color: "white" }}>
                Nivel de risco nas últimas horas
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardMockup;
