export function range(from:number, to:number):number[]{
  let r:number[] = [];
  for(let i:number=from; i<to; i++)
  {
    r.push(i);
  }
  return r;
}

export const equipes:string[] = ['PSG', 'Juventus', 'Real Madrid'];
