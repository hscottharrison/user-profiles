var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js')
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var app = express();
app.use(bodyParser.json());

//configure cors
var corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));
//allow express-session to run on all endpoints
app.use(session({ secret: config.sessionSecret }));
//init express.static()
app.use(express.static(__dirname + '/public'));

//endpoints
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);











app.listen(3000, function(){
  console.log("Listening to Port 3000")
})
