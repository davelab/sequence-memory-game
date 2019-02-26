import { bindActionCreators } from "redux";
import { createMatchingSequence } from "../../actions/memory";

export const mapStateToProps = ({ memory }) => {
  const { sequence, registred } = memory;
  const last = sequence.length - 1;
  return { currentSequenceIndex: sequence[last], registred };
};

export const mapDispatchToProps = dispatch => ({
  createMatchingSequence: bindActionCreators(createMatchingSequence, dispatch)
});
