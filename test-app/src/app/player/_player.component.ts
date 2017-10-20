import { Component, OnInit } from '@angular/core';
import { Player } from './player'; //import d'une class
@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  defaultColor:string = 'red';
  selectColor:string = 'red';
  t:string = "Simple texte";
  // t1000:string = "";
  cb:boolean = false //Case décocher par default


  // saisie(e){
  //   this.t+=e.key;
  // };

  souris(){
    console.log(this.t);
  };

  couleurs:string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'brown',
    'pink',
    'brown'
  ];

  test(e){
    console.log(e);
  }

  addPlayer(player:Player)
  {
    //ajoute au tableau des joueurs le joueur
    //transmis par le composant enfant add-player
    //this.players.push(player);
  }



  ngOnInit() {
    //version 1
    // this.player1.firstname = "Michel";
    // this.player1.lastname = "Platini";
    // this.player1.num = 10;
    //
    // this.player2.firstname = "Pavel";
    // this.player2.lastname = "Nedved";
    // this.player2.num = 6;
    //
    // this.player3.firstname = "Vincent";
    // this.player3.lastname = "Meunier";
    // this.player3.num = 4;
  }

}
