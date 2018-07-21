const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname + `/public`));

app.get('/', function(req, res) {
  console.log("at get route /");
    (res.sendFile('index.html'));
});






app.listen(8081, () => console.log('I\'m listening on port 8080'));
