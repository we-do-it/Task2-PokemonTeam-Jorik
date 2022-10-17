import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {pokemonTeamSelector, selectSelectedPokemon} from "../../store/pokemon.selectors";
import {AppState} from "../../store/states/appState.interface";
import {addPokemonToTeam} from "../../store/pokemon.actions";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  selectedPokemon$: Pokemon | null;
  myTeam$ : Pokemon[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSelectedPokemon)).subscribe(
      pokemon => this.selectedPokemon$ = pokemon
    );
    this.store.pipe(select(pokemonTeamSelector)).subscribe(
      pokemonTeam => this.myTeam$ = pokemonTeam
    );
  }

  addPokemonToTeam() {
    if(this.selectedPokemon$ !== null && this.myTeam$.length <= 5) {
      this.store.dispatch(addPokemonToTeam({pokemon: this.selectedPokemon$}));
    }else{
      alert('You already have 6 pokemon in your team')
    }

  }

}
