import generateSequence, { generateNumber } from "../memory";

export const NEXT_LEVEL = "NEXT_LEVEL";
export const GAME_OVER = "GAME_OVER";
export const INIT_SEQUENCE = "INIT_SEQUENCE";
export const REGISTER_SEQUENCE = "REGISTER_SEQUENCE";
export const SEQUENCE_REGISTRED = "SEQUENCE_REGISTRED";

export const getNextLevel = () => ({
  type: NEXT_LEVEL
});

export const gameOver = () => ({
  type: GAME_OVER
});

export const registerSequence = number => ({
  type: REGISTER_SEQUENCE,
  number
});

export const sequenceRegistred = () => ({
  type: SEQUENCE_REGISTRED
});

export const initSequence = () => {
  return (dispatch, getState) => {
    const { pokemon, memory } = getState();
    return generateSequence(memory.round, 1, () =>
      dispatch(sequenceRegistred())
    ).subscribe(() =>
      dispatch(registerSequence(generateNumber(pokemon.data.length)))
    );
  };
};
