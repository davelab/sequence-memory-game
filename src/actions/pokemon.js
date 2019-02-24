import { getPokemons } from "../API/pokemon";

export const LOADING_POKEMON = "FETCHING_POKEMON";
export const POKEMON_LOADED = "POKEMON_LOADED";
export const POKEMON_LOADING_ERROR = "POKEMON_LOADING_ERROR";

export const loadingPokemon = () => ({
  type: LOADING_POKEMON
});

export const pokemonLoaded = data => ({
  type: POKEMON_LOADED,
  data
});

export const pokemonLoadingError = error => ({
  type: POKEMON_LOADING_ERROR,
  error
});

export const loadPokemons = () => {
  return async dispatch => {
    dispatch(loadingPokemon());
    try {
      const data = await getPokemons();
      return dispatch(pokemonLoaded(data));
    } catch (error) {
      return dispatch(pokemonLoadingError(error));
    }
  };
};
