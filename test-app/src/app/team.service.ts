import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Team } from './team/team';

const urlServer = 'http://localhost:5000/teams';

@Injectable()
export class TeamService {

  teams:Team[] = [];

  constructor(private http:Http) { }

  getTeams():Observable<Team[]>
  {
    return this.http.get(urlServer)
      .map((res:Response) => res.json()); //json decode le format json en object
  }

}
