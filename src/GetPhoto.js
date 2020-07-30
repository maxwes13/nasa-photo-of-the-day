import React, { useEffect, useState } from "react";
import axios from "axios";

function GetPhoto () {

const [nasaData, setNasaData] = useState([]);

useEffect(() => {
   
  axios
    .get(`https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=DEMO_KEY`)
    .then(response => {
      console.log("success!", response);
      setNasaData(response.data);
    })
    .catch(error => console.log(error, "oops"));
}, []);



  return (
    <div className="nasa">
      <img className="nasa-img" alt="daily-img" src={nasaData.url} />
      <h2>NASA Photo Of The Day:</h2>
      <h2>{nasaData.title}</h2>
      <h3>{nasaData.date}</h3>
    </div>
  );
};


export default GetPhoto;





