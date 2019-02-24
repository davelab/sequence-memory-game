export const NEXT_LEVEL = "NEXT_LEVEL";
export const GAME_OVER = "GAME_OVER";
export const INIT_SEQUENCE = "INIT_SEQUENCE";

export const getNextLevel = () => ({
  type: NEXT_LEVEL
});

export const gameOver = () => ({
  type: GAME_OVER
});

export const initSequence = () => {
  // return async dispatch => {
  //   dispatch(loadingPokemon());
  //   try {
  //     const data = await getPokemons();
  //     return dispatch(pokemonLoaded(data));
  //   } catch (error) {
  //     return dispatch(pokemonLoadingError(error));
  //   }
  // };
};
