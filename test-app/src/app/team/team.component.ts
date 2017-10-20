import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Team } from './team'; //import d'une class

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() data:Team;
  constructor() { }

  ngOnInit() {
  }

}
