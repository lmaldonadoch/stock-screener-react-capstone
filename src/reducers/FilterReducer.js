const initialState = {
  filter: null,
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: payload.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
