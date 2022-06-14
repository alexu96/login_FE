import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import profile from './reducers';

const rootReducer = combineReducers({
  user: profile
});

export default function configureStore () {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};