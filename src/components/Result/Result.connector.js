export const mapStateToProps = ({ memory }) => {
  const { gameOver, round } = memory;

  return { gameOver, round };
};

export const mapDispatchToProps = dispatch => ({});
