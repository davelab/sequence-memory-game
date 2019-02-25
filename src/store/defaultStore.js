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
    registred: false
  }
};

export default defaultStore;
