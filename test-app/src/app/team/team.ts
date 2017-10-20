export class Team{
  private id:number;
  public teamname:string;
  public country:string;
  public joueur:string;

  constructor(
    teamname:string,
    country:string,
    joueur:string,
  ) {
    this.teamname = teamname;
    this.country = country;
    this.joueur = joueur;
  }
}
