export class Store {
  private subscribers: Function[];
  private reducers: {[key: string]: Function};
  private state: {[key: string]: any};

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  // update the state
  dispatch(action) {
    this.state = this.reduce(this.state, action); // custom function (not the generic one)
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);

    }
    return newState;
  }
}
