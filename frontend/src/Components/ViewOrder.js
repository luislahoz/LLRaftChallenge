import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import ShopIcon from "@material-ui/icons/Shop";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  table: {
    // minWidth: 600
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    // width: "50%",
    marginTop: theme.spacing(7),
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)"
    }
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

export default function ViewOrder() {
  const classes = useStyles();

  const [data, upDateData] = React.useState([]);
  const [id, getID] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleGetID= event => getID(event.target.value);

  async function sampleFunc(toInput) {
    let response = await fetch("/api/order/"+id);
    if(response.status === 200){
      let body = await response.json();
      upDateData(body);
      setMessage("");
    }else {
      setMessage("Data View failed or Item "+ id + " not available to view");
    }
    
  }

  const handleSubmit = variables => {
    const toInput = {id};
    upDateData('');
    sampleFunc(toInput);
    getID("");
  };

  // console.log(data);

  return (
    <div className={classes.paper}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <ShopIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Orders
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
                onChange={handleGetID}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            View Order
          </Button>
        </form>
        </div>
        </Container>
        <TableContainer
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Order Id</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={data.id}>
                  <TableCell align="center">{data.id}</TableCell>
                  <TableCell align="center">{data.order_id}</TableCell>
                  <TableCell align="center">{data.product_name}</TableCell>
                  <TableCell align="center">{data.product_quantity}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
    </div>
  );
}