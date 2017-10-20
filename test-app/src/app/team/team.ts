class Joueur{

  public firstname:string;
  public lastname:string;

  constructor(
    firstname:string,
    lastname:string,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

export class Team{
  private id:number;
  public teamname:string;
  public country:string;
  public joueur:Joueur;

  constructor(
    teamname:string,
    country:string,
    joueur:Joueur,
  ) {
    this.teamname = teamname;
    this.country = country;
    this.joueur = joueur;
  }
}
