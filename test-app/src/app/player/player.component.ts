import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Player } from './player'; //import d'une class
@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() data:Player;
  @Output() deleteEvent = new EventEmitter<Player>();

  deletePlayer(){
    this.deleteEvent.emit(this.data);
  }

  ngOnInit() {}

}
