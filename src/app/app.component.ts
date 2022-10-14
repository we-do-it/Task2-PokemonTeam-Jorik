import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";
import {Pokemon} from "./models/pokemon.model";
import {Sprites} from "./models/sprites.model";
import {Stats} from "./models/stats.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private appService: AppService) {
  }

  title = 'Task2-PokemonTeam-Jorik';

  ngOnInit() {
  this.showAllPokemon()
  }

  showAllPokemon() {
    this.appService.getAllPokemon().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.addPokemonDataToList(result.name);
      })
      console.log(this.pokemonList);
    });
  }

  addPokemonDataToList(name:string){
    this.appService.getMorePokemonData(name).subscribe((response:any) => {
      this.pokemonList.push(new Pokemon(
        response.name,
        response.id,
        new Sprites(
          response.sprites.front_default,
          response.sprites.front_shiny,
          response.sprites.back_default,
          response.sprites.back_shiny),
        response.types[0].type.name,
        response.types[1]?.type.name,
        new Stats(
          response.stats[0].base_stat,
          response.stats[1].base_stat,
          response.stats[2].base_stat,
          response.stats[3].base_stat,
          response.stats[4].base_stat,
          response.stats[5].base_stat,
        )
        ));
    })
  }
}
