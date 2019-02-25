import { bindActionCreators } from "redux";
import { loadPokemons } from "../../actions/pokemon";
import { initSequence } from "../../actions/memory";

export const mapStateToProps = ({ pokemon }) => {
  return { ...pokemon };
};

export const mapDispatchToProps = dispatch => ({
  loadPokemons: bindActionCreators(loadPokemons, dispatch),
  initSequence: bindActionCreators(initSequence, dispatch)
});
