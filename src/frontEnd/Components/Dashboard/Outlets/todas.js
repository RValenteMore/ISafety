import { makeStyles } from "@material-ui/core/styles";
import Mapa from "../../Mapa/Mapa";
import { Grid, Paper } from "@material-ui/core";
import Grafico from "../../Grafico/Grafico";

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
        <Grid item sm={12} md={4}>
          <Paper className={classes.Mapa}>
            <Mapa style={{ marginTop: -60 }} />
          </Paper>
        </Grid>

        <Grid item sm={12} md={8}>
          <Paper className={classes.TaxaIncidenciaGeral}>
            <div className="graficos">
              <h4>Taxa de Incidência Geral</h4>
              <Grafico/>
            </div>
          </Paper>
          <Paper className={classes.NivelRiscoGeral}>
            <div className="graficos">
              <h4>Nivel de Risco Geral</h4>
              <Grafico/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Todas;
