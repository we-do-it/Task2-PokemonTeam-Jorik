import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {selectSelectedPokemon} from "../../store/pokemon.selectors";
import {AppState} from "../../store/states/appState.interface";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  selectedPokemon$: Pokemon | null;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectSelectedPokemon)).subscribe(
      pokemon => this.selectedPokemon$ = pokemon
    );
  }

  ngOnInit(): void {
  }

}
