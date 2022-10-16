import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/states/appState.interface";
import {pokemonTeamSelector, selectSelectedPokemon} from "../../store/pokemon.selectors";

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {
  myTeam: Pokemon[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(pokemonTeamSelector)).subscribe(
    pokemonTeam => this.myTeam = pokemonTeam
  );
  }

}
