import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";
import { PokemonListGrid } from "./PokemonList.style";
import { mapStateToProps, mapDispatchToProps } from "./PokemonList.connector";

class PokemonList extends PureComponent {
  componentDidMount() {
    this.props.loadPokemons();
  }

  componentDidUpdate({ loading }) {
    const { loading: currentLoading, data } = this.props;
    if (loading && currentLoading !== loading && data.length) {
      this.props.initSequence();
    }
  }

  render() {
    const { loading, data, error } = this.props;

    if (loading) return <div>loading...</div>;

    if (error) return <div>{error}</div>;

    return (
      <PokemonListGrid>
        {data.map(({ name }, i) => (
          <Pokemon key={name} name={name} index={i + 1} />
        ))}
      </PokemonListGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
