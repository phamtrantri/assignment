import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import AppContainer from './containers/AppContainer';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={App}> </IndexRoute>
      </Route>
    </Router>
  </Provider>
);



ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
