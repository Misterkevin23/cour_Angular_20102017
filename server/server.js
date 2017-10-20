var http = require('http');
var bodyParser = require ('body-parser'); //permet de lire les donnée contenu dans les $_POST
var express = require('express'); //accélere la création de route

var urlServer = 'http://localhost:5000';

var app = express();

var players = [
  {id:1, firstname: 'Michel', lastname:'Platini', num:10, team:'Juventus', image:urlServer+'/img/platini.jpg'},
  {id:2, firstname: 'Pavel', lastname:'Nedved', num:6, team:'', image:urlServer+'/img/nedvel.jpg'},
  {id:3, firstname: 'Thomas', lastname:'Meunier', num:4, team:'PSG', image:urlServer+'/img/meunier.jpg'},
];

var equipe = [
  {id:1, teamname: 'PSG', country:'France', joueur:'Platini'},
  {id:2, teamname: 'Juventus', country:'Espagne', joueur:'Nedved'},
  {id:3, teamname: 'Real Madrid', country:'Espagne', joueur:'Meunier'},
];

//Middlewares
app.use(express.static('public')); // permet au serveur d'utiliser le dossier public
app.use(bodyParser.json()); //decoder le json present dans le champs body  des requete post

//autorisation des requetes CORS
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*"); //greffe des donnée permettant au serveur d'accepter tout type d'origine de domaine
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-with, Content-Type, Accept"); //accept tout type de requete (Ajax et autre)
  res.header("Access-Control-Allow-Methods", "*");//accept en plus des methode GET et POST les methode PUT et DELETE
  next();
});


app.get('/test',(req, res) => {
  res.json("ok");
});

//
app.get('/players',(req, res) => {
  res.json(players);
});

//route permetant d'envoyer des donnée en ajax en requete get avec un argument
app.get('/players/:lastname', (req, res) => {
  let lastname = req.params.lastname; //les parametre en get sont directement accessible sous la forme d'une methode dans l'object params
  let player = players.filter(p => p.lastname == lastname)[0]; // comme on donné l'indice 0, on envoi un seul objet
  res.json(player);
});

app.post('/player', (req,res) => {
  let player = {
    firstname: req.body.firstname,  //extration du champs firstname de l'envoi
    lastname: req.body.lastname,
    num: req.body.num,
    team: req.body.team,
    photo: req.body.photo
  };
  //if(req.body.firstname && req.body.lastname && req.body.num)  //recommendation verifier les donnée avant enregistreemnt
  //{
    players.push(player);
    res.json({msg: "ok"})
//  }
  //else
//  {
    res.json({msg: "erreur"});
//  }

});

app.get('/teams',(req, res) => {
  res.json(equipe);
});

//premier argument le port ecouté
//la fonction callback
app.listen(5000, function() {
  console.log('server écoutant le port 5000...');
});
