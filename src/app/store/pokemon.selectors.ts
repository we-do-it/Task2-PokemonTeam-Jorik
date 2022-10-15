import {AppState} from "./states/appState.interface";
import {createSelector} from "@ngrx/store";
import {PokemonState} from "./states/pokemonState.interface";

export const selectFeature = (state: AppState) => state.pokemon;

export const pokemonTeamSelector = createSelector(
  selectFeature,
  (state: PokemonState) => state.pokemonTeam
);

export const selectSelectedPokemon = createSelector(
  selectFeature,
  (state:PokemonState) => state.selectedPokemon
);
