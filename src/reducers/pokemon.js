import {
  LOADING_POKEMON,
  POKEMON_LOADED,
  POKEMON_LOADING_ERROR
} from "../actions/pokemon";
import defaultStore from "../store/defaultStore";

const pokemon = (state = defaultStore.pokemon, action) => {
  switch (action.type) {
    case LOADING_POKEMON:
      return { ...state, loading: true };
    case POKEMON_LOADED: {
      return { ...state, loading: false, data: action.data };
    }
    case POKEMON_LOADING_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
};

export default pokemon;
