import React, { Component } from "react";
import { connect } from "react-redux";
import { PokemonStyled } from "./Pokemon.style.js";
import { mapStateToProps, mapDispatchToProps } from "./Pokemon.connector.js";

class Pokemon extends Component {
  state = {
    clicked: false
  };

  onClick = number => () => {
    this.props.registred && this.props.createMatchingSequence(number);
  };

  onMouseDown = () => {
    this.setState(() => ({
      clicked: true
    }));
  };

  onMouseUp = () => {
    this.setState(() => ({
      clicked: false
    }));
  };

  render() {
    const { name, index, currentSequenceIndex, registred } = this.props;

    return (
      <PokemonStyled
        role="button"
        onClick={this.onClick(index)}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        selected={
          (!registred && index === currentSequenceIndex) || this.state.clicked
        }
      >
        {name}
      </PokemonStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
