import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mapa from "../../Mapa/Mapa";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Mapa: {
    marginTop: 50,
    marginBottom: 10,
    marginRight: 10,

    height: 630,
  },

  TaxaIncidenciaGeral: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 20,

    height: 305,
  },

  NivelRiscoGeral: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,

    height: 305,
  },
}));

function Todas() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/**Mapa */}
        <Grid item md={4}>
          <Paper className={classes.Mapa}>
            <Mapa style={{ marginTop: -60 }} />
          </Paper>
        </Grid>

        <Grid item md={8}>
          <Paper className={classes.TaxaIncidenciaGeral}></Paper>
          <Paper className={classes.NivelRiscoGeral}></Paper>
        </Grid>

        {/**Secções coloridas*/}
        <Grid container md={12} className="seccoes">
            <Grid item className="peixaria">
              <h3 className="textoCartoes">Peixaria</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
              <h1 style={{fontSize: 60}} className="textoCartoes">45%</h1>
            </Grid>
            <Grid item className="talho">
              <h3 className="textoCartoes">Talho</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
              <h1 style={{fontSize: 60}} className="textoCartoes">45%</h1>
            </Grid>
            <Grid item className="frescos">
              <h3 className="textoCartoes">Frescos</h3>
              <p className="textoCartoes">Nivel de risco nas últimas horas</p>
              <h1 style={{fontSize: 60}} className="textoCartoes">45%</h1>
            </Grid>
            <Grid item className="padariaPastelaria">
              <h3 className="textoCartoes" style={{ color: "white" }}>
                Padaria e Pastelaria
              </h3>
              <p className="textoCartoes" style={{ color: "white" }}>
                Nivel de risco nas últimas horas
              </p>
              <h1 style={{fontSize: 60, color: "white"}} className="textoCartoes">45%</h1>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Todas;
