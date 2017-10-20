import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player/player'; //import d'une class
import { range, equipes } from '../lib/utils';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input() c1:string; //permet de faire la jonction d'entrée avec le parent
  @Input() c2:string;

  // <T> class générique
  @Output() myEvent = new EventEmitter<Player>(); //evenement a destination du parents

  newPlayer:Player = new Player('','',-1);

  number_list:number[];
  equipes:string[];
  erreur:string;

  //Recrée l'object newPlayer (réinitialisation)
  private clearPlayerForm(){
    this.newPlayer = new Player('','',-1);
  }

  // while(i<100)
  // {
  //   this.nbs.push(i);
  //   i++;
  // }

  savePlayer(){
    if(!this.newPlayer.image){
      this.newPlayer.image="http://localhost:5000/img/tortue.jpg"
    }

    let p:Player = new Player (
      this.newPlayer.firstname,
      this.newPlayer.lastname,
      this.newPlayer.num,
      this.newPlayer.team,
      this.newPlayer.image,
    );

    //on notifie le parent de l'événement
    //déclenché côté enfant
      this.myEvent.emit(p);
      this.clearPlayerForm();
      this.erreur="";

  }

  ngOnInit() {
    this.number_list=range(1,100);
    this.equipes=equipes;
    console.log(this.number_list);
    console.log(this.equipes);
  }

}
