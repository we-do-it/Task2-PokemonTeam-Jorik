import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon.model";

export const addPokemonToTeam = createAction(
  '[Pokemon Details] Add Pokemon To Team',
  props<{ pokemon: Pokemon }>()
);

export const removePokemonFromTeam = createAction(
  '[Pokemon Team] Remove Pokemon From Team',
  props<{ pokemon: Pokemon }>()
);

export const selectPokemon = createAction(
  '[Pokemon List] Select Pokemon',
  props<{ pokemon: Pokemon }>()
);
