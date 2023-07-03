import { INCREMENT, DECREMENT } from './actions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: Math.max(state.count-1, 0)
      };
    default:
      return state;
  }
};

export const initialState = {
  count: 0
};