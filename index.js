const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const axios = require('axios');
const handlebars = require('handlebars')
const app = express();
const auth = require('./auth.json');
const token = auth.token

// Handlebars Setup Here:

// Set static/public folder
app.use(express.static(__dirname + `/public`));

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));

// global axios config
const axiosConfig = {
    headers: {
      "x-ebirdapitoken": token,
      "content-type": "application/json"
    }
  };

// GET routes
app.get('/a', function(req, res) {
    (res.sendFile('index.html'));
    console.log("at get route /");
});

app.get ('/idaho', function (req, res) {
  console.log("at idaho get route");
//api reqeust
  axios.get('https://ebird.org/ws2.0/data/obs/US-ID/recent', axiosConfig)
    .then(function(response){
      console.log('**************my response ', response.data[0]);
      res.send('recent idaho sightings: ', response.data[0])
    })
    .catch(function(error){
      console.log('*************ERROR ', error);
    })
});



app.post('/recentByState', function (req, res){
  const state = req.body.state;
  console.log("state =", state);


  //api reqeust
    axios.get('https://ebird.org/ws2.0/data/obs/' + state + '/recent', axiosConfig)
      .then(function(response){
        console.log('**************state data ', response.data[0]);
        res.send('recent' + state + 'sightings', response.data[0])
      })
      .catch(function(error){
        console.log('*************ERROR getting state ', error);
      })

})

app.listen(8080, () => console.log('I\'m listening on port 8080'));
