import { combineReducers } from "redux";
import pokemon from "./pokemon";
import memory from "./memory";

const rootReducer = combineReducers({
  pokemon,
  memory
});

export default rootReducer;
