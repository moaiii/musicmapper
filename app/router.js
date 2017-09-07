import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import { store } from './store';
import LayoutMain from './components/layout/layout-main';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={LayoutMain}>
    </Route>
  </Router>
)