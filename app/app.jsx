import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './components/App.jsx';
import Day from './components/Day.jsx';
import Days from './components/Days.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Days} />
        <Route path="/days" component={Days} />
        <Route path="/days/:date" component={Day} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
