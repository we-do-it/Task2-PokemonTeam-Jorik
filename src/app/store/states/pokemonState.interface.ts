import {Pokemon} from "../../models/pokemon.model";

export interface PokemonState {
  pokemonTeam: Pokemon[];
  selectedPokemon: Pokemon | null;
}
