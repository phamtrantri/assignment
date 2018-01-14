/**
 * Created by phamtrantri on 8/28/2016.
 */
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
const defaultState = {
    news: []
};
const enchancers = compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enchancers);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;