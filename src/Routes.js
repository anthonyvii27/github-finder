import React, { useState, useEffect } from 'react';
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
        <Route path="/repo:id" component={ Repos } />
      </Switch>
    </BRouter>
  )
}
