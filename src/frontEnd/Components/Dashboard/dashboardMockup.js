import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./dashboardMockup.css";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import ISafetyLogo from "../../Assets/ISafetyLogo/logo.png";
import SearchIcon from "../../Assets/DashBoard/SearchIcon.png";
import FilterIcon from "../../Assets/DashBoard/FilterIcon.png";

const useStyles = makeStyles((theme) => ({
  Root: {
    flexGrow: 1,
  }
}));

function DashboardMockup() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.Root}>
        <Grid item direction="column" className="verticalNavBar">
          <img className="isafety" src={ISafetyLogo} alt="Logo ISafety"/>
          <ul>
            <li>
              <NavLink
                className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
                to="/"
              >
                Sonae - Todas
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
                to="/continentes"
              >
                Sonae - Continente
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
                to="/bomdia"
              >
                Sonae - Bom Dia
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
                to="/entrepostos"
              >
                Sonae - Entrepostos
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
                to="/historico"
              >
                Histórico
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => {
                  if(isActive)
                    return "selecionado"
                  else
                    return "nSelecionado"
                }}
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
                <img className="PesquisarIcon" src={SearchIcon} alt="Pesquisar"/>
              </button>
              <button className="filterBtn">
                <img className="PesquisarIcon" src={FilterIcon} alt="Filtro"/>
              </button>
              <Divider 
                  orientation="vertical"
                  style={{marginLeft: 1000, height: 35, marginTop: -35, width: 3}}
              />
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
