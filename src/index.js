import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import GlobalStyle from "./index.style";
import PokemonList from "./components/PokemonList/PokemonList";

import rootReducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <GlobalStyle />
    <PokemonList />
  </Provider>,
  document.getElementById("root")
);
