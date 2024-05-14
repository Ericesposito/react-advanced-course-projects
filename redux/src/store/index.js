import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  // if (action.type === 'increment') {
  //   return { ...state, counter: state.counter + 1 };
  // }
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return { ...state, counter: state.counter + action.amount };
  }

  if (action.type === 'decrement') {
    return { ...state, counter: state.counter - 1 };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
