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


function Continentes() {
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
      </Grid>
        </div>
    )
}

export default Continentes;
