import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player'; //import d'une class
import { PlayerService } from '../player.service';
import 'rxjs/add/operator/delay'; //operateur permettant de mettre des delai avant l'operation suivante de l'observable

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  //donnée brute
  // player1:Player = new Player('Michel', 'Platini', 10, 'Juventus', 'http://img1.cfstatic.com/ballon-d-or/michel-platini-n-a-jamais-remporte-de-coupe-du-monde-mais-possede-3-ballon-d-or-il-est-considere-par-beaucoup-comme-le-meilleur-joueur-francais-de-l-histoire_66445_w620.jpg' );
  // player2:Player = new Player('Pavel', 'Nedved', 6, '' , 'https://medias.lequipe.fr/img-sportif-foot/4328/100?20171012091939-13');
  // player3:Player = new Player('Vincent', 'Meunier', 4, 'PSG', 'http://si.rosselcdn.net/sites/default/files/imagecache/pagallery_450x300/2012/08/15/1252160394_ID8002838_meunierphoto_110408_H40UHG_0.JPG' );

  players:Player[] = []; //typage du tableau
  message:string;
  playersLoaded:boolean = false;

  constructor(private playerService:PlayerService){};

addPlayer(player: Player)
{
  if(player.num != -1)
  {
    this.playerService.addPlayer(player)
      .map(data =>data.json())
      .subscribe(data => {
        console.log(data);
        if(data.msg =="ok")
        {
          this.players.push(player);
          this.message="Joueur ajouter avec succes";
        }
        else
        {
          this.message="Impossible d'enregistrer le joueur";
        }
      });
    this.players.push(player);
    this.message="Joueur ajouter avec succes";
  }
  else
  {
    this.message="Veuillez choisir un numéros de maillot";
  }
}

deletePlayer(player: Player)
{
  //let i:number= -1;

  //.forEach(function(p, index) {}) ES5

  //version ES6 avec foeEach
  // this.players.forEach((p, index) => {
  //     let cond1:boolean = p.lastname == player.lastname;
  //     let cond2:boolean = p.firstname == player.firstname;
  //     if(cond1 && cond2) i = index;
  // });

  //si le joueur a été trouvé dans le tableau on le retire
  //if(i != -1) this.players.splice(i,1);

  //version ES6 avec filter
  let playersFiltered:Player[] =
    this.players.filter(p => {return player.lastname != p.lastname});

  //mise a jour du tableau players
  this.players = playersFiltered;

}

  ngOnInit() {
    //version a bannir
    //this.players = this.playerService.getPlayers2();


    //bonne version
    //version avec donnée envoyer du serveur
    this.playerService.getPlayers()
      .delay(1000)
      .subscribe((players:Player[]) => {
        this.players = players; // assigner les joueurs à une propriété du composante
        this.playerService.players = players; //assigner les joueurs a une propriété du service
        this.playersLoaded = true;
      });


    //version avec les donnée en brut
    // this.players = [
    //   this.player1,
    //   this.player2,
    //   this.player3,
    // ];
  }

}
