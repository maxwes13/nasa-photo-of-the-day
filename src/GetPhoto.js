import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: '25px',
    },
  },
  text: {
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
    marginTop: '25px',
  },
}));



function GetPhoto () {

const classes = useStyles();


const [nasaData, setNasaData] = useState([]);

const randomDay = Math.floor(Math.random() * 31) + 1;
const randomMonth = Math.floor(Math.random() * 12) + 1;

useEffect(() => {
   
  axios
    .get(`https://api.nasa.gov/planetary/apod?date=2020-${randomMonth}-${randomDay}&api_key=DEMO_KEY`)
    .then(response => {
      console.log("success!", response);
      setNasaData(response.data);
    })
    .catch(error => console.log(error, "oops"));


}, []);

function refreshPage() {
  window.location.reload(false);
}

  return (
    <div className={classes.root}>
      <img className="nasa-img" alt="daily-img" src={nasaData.url} />
      <div className={classes.text}>
      <Typography variant="h4" gutterBottom>NASA Random Photo Of The Day:</Typography>
      <Typography variant="h5" gutterBottom>{nasaData.title}</Typography>
      <Typography variant="h6" gutterBottom>{nasaData.date}</Typography>
      <Typography variant="subtitle1" gutterBottom>{nasaData.explanation}</Typography>
      </div>
      <Button variant="contained" color="secondary" onClick={refreshPage}>
        Random Image
      </Button>
    </div>
  );
};


export default GetPhoto;





