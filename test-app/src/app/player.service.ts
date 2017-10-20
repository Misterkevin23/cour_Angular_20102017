import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Player } from './player/player';


const urlServer = 'http://localhost:5000/players';

@Injectable()
export class PlayerService {
  players:Player[] = [];

  constructor(private http:Http) { }

  // getPlayers doit renvoyer des Observables auxquels subscrira la composante
  //on renvoi un tableau de joueurs
  getPlayers():Observable<Player[]>
  {
    return this.http.get(urlServer)
      .map((res:Response) => res.json()); //json decode le format json en object
  }

  //version a bannir
  // Version erronnée => getPlayers() renvoie un tableau vide
  //car le retour de la fonction est éxécuté avant le retour de la
  //requête ajax
  // getPlayers2():Player[]
  // {
  //   this.http.get(urlServer)
  //     .map((res:Response) => res.json())
  //     .subscribe(data => this.players = data);
  //
  //   return this.players;
  // }

  getPlayer(lastname:string):Observable<any> //le typage any permet 'accepter tout type de typage
  {
    return this.http.get(`${urlServer}/${lastname}`);
  }

  addPlayer(player:Player):Observable<any> {
    let bodyString = JSON.stringify(player);  //le body d'envoi est mi en format json
    let headers = new Headers({'Content-Type':'application/json'}); //le header a un contenu de la forme json
    let options = new RequestOptions({headers : headers}); //on enveloppe les regles
    return this.http.post(urlServer, bodyString, options); //3 argument a fournir : l'url serveur, le body contenant les donnée a envoyer, les option de requete
  }

}
