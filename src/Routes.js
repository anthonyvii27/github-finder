import React from 'react';
import {
  BrowserRouter as BRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Repos from './Pages/Repos';

export default function Routes() {
  return (
    <BRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/repos/anthonyvii27" component={ Repos } />
      </Switch>
    </BRouter>
  )
}
