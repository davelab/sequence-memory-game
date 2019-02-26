import {
  REGISTER_SEQUENCE,
  SEQUENCE_REGISTRED,
  SET_MATCHING_NUMBER
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

    default:
      return state;
  }
};

export default memory;
