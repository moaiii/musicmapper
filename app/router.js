import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import LayoutMain from './src/main/components/layout-main';


export default
<Router history={browserHistory}>
  <Route path="/" component={LayoutMain}>
  </Route>
</Router>;
