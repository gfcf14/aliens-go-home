import { INITIAL } from 'actions/action-types';

const initialState = {
  message: '',
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL.INITIAL_MESSAGE: {
      return {
        ...state,
        message: 'Redux integrated!',
      };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
