const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
