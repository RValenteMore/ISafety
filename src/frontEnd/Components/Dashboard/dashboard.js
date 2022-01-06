import React, { useEffect, useState} from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Mapa from "../Mapa/Mapa.js";
import SonaeLogo from "../../Assets/SonaeLogo/Sonae.png";
import Grafico from "../Grafico/Grafico";
import Distrito from "../Distrito/Distrito";
import { ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  Paper: {
    height: theme.spacing(20),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),

    textAlign: "center",
    backgroundColor: "#525252",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  Mapa: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,

    height: theme.spacing(103),

    textAlign: "center",
    backgroundColor: "#525252",
  },
  Paper2: {
    height: theme.spacing(37.25),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),

    textAlign: "center",
    backgroundColor: "#525252",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  Grafico: {
    height: theme.spacing(58.5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),

    textAlign: "center",
    backgroundColor: "#525252",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  mapaTitulo: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(15),
    color: "white",
  },
  graficoTitulo: {
    color: "white",
    marginBottom: 50,
  },
}));

function DashBoard() {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: "black"}}>
      <Grid container className={classes.root}>
        <Grid item direction="column" xs={12} sm={6} md={2}>
          <Grid item xs={12}>
            <Paper className={classes.Paper} style={{background: "white"}}>
              {/* <ResponsiveContainer> */}
                <img src={SonaeLogo} alt="Logo da Sonae" style={{marginLeft: -35, marginTop: 50}}/>
              {/* </ResponsiveContainer> */}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              Dges
              <br />
              Mais algo
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              Dges
              <br />
              Mais algo
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              Dges
              <br />
              Mais algo
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              Dges
              <br />
              Mais algo
            </Paper>
          </Grid>
        </Grid>


        <Grid item direction="column" xs={12} sm={6} md={3}>
          <Paper className={classes.Mapa}>
            
          </Paper>
        </Grid>        

        <Grid item xs={12} sm={12} md={7}>
          <Paper className={classes.Paper2}>
            <Distrito/>
          </Paper>
          <Paper className={classes.Grafico}>
            <h1 className={classes.graficoTitulo}>Últimos Acidentes</h1>
            <Grafico />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;