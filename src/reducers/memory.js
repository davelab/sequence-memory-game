import {
  REGISTER_SEQUENCE,
  SEQUENCE_REGISTRED,
  SET_MATCHING_NUMBER,
  NEXT_LEVEL,
  GAME_OVER
} from "../actions/memory";
import defaultStore from "../store/defaultStore";

const memory = (state = defaultStore.memory, action) => {
  switch (action.type) {
    case REGISTER_SEQUENCE:
      return { ...state, sequence: [...state.sequence, action.number] };
    case SEQUENCE_REGISTRED:
      return { ...state, registred: true };
    case SET_MATCHING_NUMBER:
      return { ...state, matching: [...state.matching, action.number] };
    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
        registred: false,
        matching: [],
        sequence: []
      };
    case NEXT_LEVEL:
      return {
        ...state,
        round: state.round + 1,
        registred: false,
        matching: [],
        sequence: []
      };

    default:
      return state;
  }
};

export default memory;
