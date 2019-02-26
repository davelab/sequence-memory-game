import React from "react";
import { connect } from "react-redux";
import { PokemonStyled } from "./Pokemon.style.js";
import { mapStateToProps, mapDispatchToProps } from "./Pokemon.connector.js";

const Pokemon = ({
  name,
  index,
  currentSequenceIndex,
  registred,
  createMatchingSequence
}) => {
  const onClick = number => () => {
    registred && createMatchingSequence(number);
  };

  return (
    <PokemonStyled
      role="button"
      onClick={onClick(index)}
      selected={!registred && index === currentSequenceIndex}
    >
      {name}
    </PokemonStyled>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
