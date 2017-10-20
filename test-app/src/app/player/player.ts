export class Player{
  private id:number;
  public firstname:string;
  public lastname:string;
  public num:number;
  public team:string;
  public image:string;

  constructor(
    firstname:string,
    lastname:string,
    num:number,
    team?:string,
    image?:string,

  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.num = num;
    if (image) this.image = image;

    //l'argument team est facultatif (?), si il est fournit au constructeur
    // on hydrate la propriété this.team
    if(team) this.team = team;
  }
}
