var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var players = [
  {
    id:1,
    firstname:'Michel',
    lastname:'Platini',
    num:10,
    team:'Juve',
    photo:urlServer + '/img/platini.jpg'
  },
  {id:2, firstname:'Pavel', lastname:'Nedved', num:6, team:'', photo:''},
  {id:3, firstname:'Thomas', lastname:'Meunier', num:4, team:'PSG', photo:''},
];

// Middlewares
app.use(express.static('public'));

// décodage du champ body des requêtes POST
app.use(bodyParser.json());

// autorisation des requêtes CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get('/players', (req, res) => {
  res.json(players);
});

app.get('/players/:lastname', (req, res) => {
  let lastname = req.params.lastname;
  let player = players.filter(p => p.lastname == lastname)[0];
  res.json(player);
});

app.post('/players', (req, res) => {
  // Recommandation: vérifier les données côté serveur
  let player = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    num: req.body.num,
    team: req.body.team,
    photo: req.body.photo
  };
  players.push(player);
  res.json({msg: "ok"})
});

app.listen(5000, function() {
  console.log('Server écoutant le port 5000...');
});
