export class Store {
  private subscribers: Function[];
  private reducers: {[key: string]: Function};
  private state: {[key: string]: any};

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  // update the state
  dispatch(action) {

    // create a new state, copy in old and add to it (immutable)
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload]
    };

    console.log(this.state, 'new state')
  }
}
