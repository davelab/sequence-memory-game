import { bindActionCreators } from "redux";
import { loadPokemons } from "../../actions/pokemon";

export const mapStateToProps = ({ pokemon }) => {
  return { ...pokemon };
};

export const mapDispatchToProps = dispatch => ({
  loadPokemons: bindActionCreators(loadPokemons, dispatch)
});
