import {PokemonState} from "./states/pokemonState.interface";
import {createReducer, on} from "@ngrx/store";
import {addPokemonToTeam, removePokemonFromTeam, selectPokemon} from "./pokemon.actions";

export const initialState: PokemonState = {
  pokemonTeam: [],
  selectedPokemon: null
}

export const reducers = createReducer(
  initialState,
  on(addPokemonToTeam, (state, { pokemon }) => ({
    ...state,
    pokemonTeam: [...state.pokemonTeam, pokemon],
  })),
  on(selectPokemon, (state, { pokemon }) => ({
    ...state,
      selectedPokemon: pokemon
  })),
  on(removePokemonFromTeam, (state, { pokemon }) => ({
    ...state,
    pokemonTeam: state.pokemonTeam.filter((teamMember) => teamMember.name !== pokemon.name)
  }))
);
