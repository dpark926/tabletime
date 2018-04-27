import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';

const initialState = {
  clickedNav: '',
  clickedSubNav: ''
}

const store = createStore(
  clickReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;