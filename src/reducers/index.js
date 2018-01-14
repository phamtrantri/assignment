import { combineReducers } from 'redux';
import { news } from './news'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  news,
  routing: routerReducer
});
export default rootReducer