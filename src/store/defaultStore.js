const defaultStore = {
  pokemon: {
    loading: false,
    error: "",
    data: []
  },
  memory: {
    round: 0,
    sequence: [],
    matching: [],
    registred: false,
    gameOver: false
  }
};

export default defaultStore;
