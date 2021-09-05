import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ShopIcon from "@material-ui/icons/Shop";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Home() {

    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ShopIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          RAFT Challenge
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <Link to="/add">
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Add Orders
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link to="/delete">
                    <Button 
                        fullWidth
                        variant="contained"
                        color="secondary"
                    >
                        Delete
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link to="/order">
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        View Order
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link to="/orders">
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        View All Orders
                    </Button>
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}