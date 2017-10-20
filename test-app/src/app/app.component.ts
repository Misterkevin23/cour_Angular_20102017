import { Component } from '@angular/core';

import { PlayerService } from './player.service';
import { TeamService } from './team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService, TeamService]
})
export class AppComponent {
  title = 'L\'équipe';
  message= 'les vers de terre';
  private message2:string;//type primitive string
  nb:number = 0;
  isMember:boolean = false;

  test() {
    this.message = 'autre vers';
    this.message2 = this.getMessage();
  }

  compteur() {
    if(this.nb <5)
    {
      this.nb = this.nb + 1;
    }
    else
    {
      this.nb=0;
    }

  }

  getMessage():string {
    return this.message;
  }
}
