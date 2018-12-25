import { INITIAL } from './action-types';

const initialMessage = () => {
  return {
    type: INITIAL.INITIAL_MESSAGE,
  };
};

function getInitialMessage () {
  return async (dispatch) => {
    dispatch(initialMessage());
  };
}

export {
  getInitialMessage,
};
