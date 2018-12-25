import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import gameReducer from './reducers/game-reducer';

const reducers = combineReducers({
  gameReducer,
});

const reduxDevToolsExtCompose = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = ((typeof window !== 'undefined') && window[reduxDevToolsExtCompose]) || compose;

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(reduxThunk),
)(createStore);

export default function configureStore (initialState = {}) {
  return createStoreWithMiddleware(reducers, initialState);
}
