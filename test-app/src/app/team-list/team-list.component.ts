import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team/team';
import 'rxjs/add/operator/delay'; //operateur permettant de mettre des delai avant l'operation suivante de l'observable

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams:Team[] = []; //typage du tableau
  teamsLoaded:boolean = false;

  constructor(private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getTeams()
      .delay(1000)
      .subscribe((teams:Team[]) => {
        this.teams = teams; // assigner les equipes à une propriété du composante
        this.teamService.teams = teams; //assigner les equipes a une propriété du service
        this.teamsLoaded = true;
        console.log(teams);
      });
  }

}
