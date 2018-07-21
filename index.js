const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const axios = require('axios');
const app = express();
const auth = require('./auth.json');
const token = auth.token

app.use(express.static(__dirname + `/public`));

app.get('/a', function(req, res) {
    // (res.sendFile('index.html'));
    console.log("at get route /");
});


app.get ('/idaho', function (req, res) {
  console.log("at idaho get route");

//api reqeust//
  const axiosConfig = {
    headers: {
      "x-ebirdapitoken": token,
      "content-type": "application/json"
    }
  };

  axios.get('https://ebird.org/ws2.0/data/obs/US-ID/recent', axiosConfig)
    .then(function(response){
      console.log('**************my response ', response);
    })
    .catch(function(error){
      console.log('*************ERROR ', error);
    })





});

app.listen(8080, () => console.log('I\'m listening on port 8080'));
