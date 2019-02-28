import React from "react";
import { connect } from "react-redux";
import ResultStyled from "./Result.style.js";
import { mapStateToProps, mapDispatchToProps } from "./Result.connector.js";

const Result = ({ gameOver, round }) => {
  return (
    <ResultStyled>
      <h2>{gameOver ? "Game Over" : `Round n: ${round + 1}`}</h2>
    </ResultStyled>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
