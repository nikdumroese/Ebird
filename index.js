const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const auth = require('./auth.json');
const token = auth.token

app.use(express.static(__dirname + `/public`));

app.get('/a', function(req, res) {
    // (res.sendFile('index.html'));
    console.log("at get route /");
    console.log("token: ", token);
});




app.listen(8081, () => console.log('I\'m listening on port 8080'));
