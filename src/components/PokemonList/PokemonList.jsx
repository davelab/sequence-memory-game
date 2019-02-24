import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";
import { PokemonListGrid } from "./PokemonList.style";
import { mapStateToProps, mapDispatchToProps } from "./PokemonList.connector";
import generateSequence from "../../memory";

class PokemonList extends PureComponent {
  componentDidMount() {
    this.props.loadPokemons();
  }

  componentDidUpdate({ loading }) {
    const { loading: currentLoading, data } = this.props;
    if (loading && currentLoading !== loading && data.length) {
      console.log("init sequence", data.length);
      generateSequence(data.length);
    }
  }

  render() {
    const { loading, data, error } = this.props;

    if (loading) return <div>loading...</div>;

    if (error) return <div>{error}</div>;

    return (
      <PokemonListGrid>
        {data.map(({ name }, i) => (
          <Pokemon key={name} name={name} index={i} />
        ))}
      </PokemonListGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
