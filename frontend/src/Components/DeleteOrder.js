import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function DeleteOrder() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [id, delID] = React.useState("");

  const handleIdDelete= event => delID(event.target.value);

  const [message, setMessage] = React.useState("Nothing deleted in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/order/"+id, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body);
    setMessage(body.id ? "Data " + body.id + " Deleted" : "Data Deletion failed");
  }

  const handleSubmit = variables => {
    const toInput = {id};
    sampleFunc(toInput);
    delID("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ShopIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Delete Order
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                value={id}
                label="id"
                name="id"
                onChange={handleIdDelete}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Delete
          </Button>
          {" "}
            <Typography align="center">
              {message}
            </Typography>{" "}

          <Link className={classes.link} to="/">
            {" "}
            <Typography align="left">
              &#x2190; Back Home
            </Typography>{" "}
          </Link>
        </form>
      </div>
    </Container>
  );
}