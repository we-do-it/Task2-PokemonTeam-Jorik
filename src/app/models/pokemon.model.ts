import {Sprites} from "./sprites.model";
import {Stats} from "./stats.model";

export class Pokemon {

  constructor(
    public name: string,
    public id: number,
    public sprites: Sprites,
    public firstType: string,
    public secondType: string | null,
    public stats: Stats,
  ) {
  }
}
