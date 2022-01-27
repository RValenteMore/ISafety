import React, { useState } from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./dashboardMockup.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ISafetyLogo from "../../Assets/ISafetyLogo/logo.png";
import SearchIcon from "../../Assets/DashBoard/SearchIcon.png";
import FilterIcon from "../../Assets/DashBoard/FilterIcon.png";
import NotificationIcon from "../../Assets/DashBoard/NotifcationIcon.png";
import MailIcon from "../../Assets/DashBoard/MailIcon.png";
import MailDot from "../../Assets/DashBoard/MailDot.png";

import BasicMenu from "./Outlets/MenuProfile/menu";
import { useAuth } from "../../Providers/auth";

const useStyles = makeStyles((theme) => ({
  Root: {
    flexGrow: 1,
  },
}));

function DashboardMockup() {
  const [mail, setMail] = useState(1);
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.Root}>
        <Grid item className="verticalNavBar">
          <img className="isafety" src={ISafetyLogo} alt="Logo ISafety" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/"
              >
                Sonae - Todas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/continentes"
              >
                Sonae - Continente
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/bomdia"
              >
                Sonae - Bom Dia
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/entrepostos"
              >
                Sonae - Entrepostos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/historico"
              >
                Histórico
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return "selecionado";
                  else return "nSelecionado";
                }}
                to="/dashboard/definicoes"
              >
                Definições
              </NavLink>
            </li>
          </ul>
        </Grid>

        {/**Container da Diteita */}
        <div className="antibug">
          <Grid item md={12} className="rightContainer">
            {/*Barra do Topo*/}
            <div className="topBar">
              <input className="search" />

              <Button
                style={{ marginLeft: -64, borderRadius: 50, height: "53%" }}
              >
                <img
                  className="PesquisarIcon"
                  src={SearchIcon}
                  alt="Pesquisar"
                />
              </Button>

              <Button>
                <img src={FilterIcon} alt="Filtro" />
              </Button>

              <div
                style={{
                  backgroungColor: "green",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  position: "absolute",
                  right: "100pt",
                }}
              >
                <Divider
                  orientation="vertical"
                  style={{ height: 35, width: 3 }}
                />

                <Button>
                  <img className="" src={NotificationIcon} alt="Notificacoes" />
                </Button>

                <Button
                  onClick={() => {
                    setMail(0);
                  }}
                >
                  <img src={MailIcon} alt="Correio" />
                  <img
                    src={MailDot}
                    style={{
                      margin: "-20pt 0 0 -3pt",
                      height: "6pt",
                      opacity: mail,
                    }}
                  />
                </Button>

                <Divider
                  orientation="vertical"
                  style={{ height: 35, width: 3, marginRight: "50pt" }}
                />

                <Button
                  style={{ height: "90%" }}
                >
                  
                </Button>

                <BasicMenu/>
              </div>
            </div>

            {/**Conteúdo*/}
            <Outlet />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default DashboardMockup;
