import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'eat pizza', complete: false}]
};

export function reducer(
  state = initialState,
  action: { type: string, payload: any }
  ) {

  switch(action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];

      // when returning ned state, need to make sure we include the whole of the previous state i.e. not just the data, so 'state', then include the changes to the state
      return {
        ...state,
        data: data
      }
    }

    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(todo => todo.label !== action.payload.label);
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
