import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Mapa from "./Components/Mapa/Mapav2";
import SonaeLogo from "./Assets/SonaeLogo/Sonae.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  Paper: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(8),
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

    paddingTop: theme.spacing(21.80),
    paddingBottom: theme.spacing(22),
    paddingRight: theme.spacing(9),
    paddingLeft: theme.spacing(9),

    textAlign: "center",
    backgroundColor: "#525252",
  },
  Paper2: {
    paddingTop: theme.spacing(22.84),
    paddingBottom: theme.spacing(22.85),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),

    textAlign: "center",
    backgroundColor: "#525252",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  Paper3: {
    paddingTop: theme.spacing(34.6),
    paddingBottom: theme.spacing(34.6),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),

    textAlign: "center",
    backgroundColor: "#525252",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item direction="column" xs={12} sm={6} md={2}>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
            Dges
            <br />
            Mais algo
            {/* <img src={SonaeLogo} alt="Logo da Sonae" /> */}
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
              <Mapa />
            </Paper>
        </Grid>

        
        <Grid item xs={12} sm={6} md={7}>
            <Paper className={classes.Paper2}>
            </Paper>
            <Paper className={classes.Paper3}>
            </Paper>
        </Grid>

        
      </Grid>
    </div>
  );
}

export default App;
