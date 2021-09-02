import React, {useState } from 'react';
import axios from "axios";
import Message from './Message';
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
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function AddOrder() {
  const classes = useStyles();
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log("THE NEW ONE!!");
console.log(file);
console.log(formData);
    try {
      const res = await axios.post('http://localhost:8080/api/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      // setUploadPercentage(0)
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ShopIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Orders
        </Typography>
          <Grid container spacing={2}>
            <form className={classes.form} onSubmit={onSubmit}>
              <div className='custom-file mb-4'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='customFile'
                  onChange={onChange}
                />
              </div>
              <div>
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  type='submit'
                  value='Upload'
                  className='btn btn-primary btn-block mt-4'
                >
                  Add Orders
                </Button>
              </div>
              <Grid>
                <Link className={classes.link} to="/">
                  {" "}
                  <Typography align="left">
                    &#x2190; Back Home
                  </Typography>{" "}
                </Link>
              </Grid>
          {message ? <Message msg={message} /> : null}
            </form>
            {uploadedFile ? (
              <div className='row mt-5'>
                <div className='col-md-6 m-auto'>
                  {/* <h3 className='text-center'>{uploadedFile.fileName}</h3> */}
                  <h3 className='text-center'>{filename}</h3>
                  <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                </div>
              </div>
            ) : null}
          </Grid>
      </div>
    </Container>
  );
}