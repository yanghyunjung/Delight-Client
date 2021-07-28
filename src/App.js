import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Recommand from "./pages/Recommand";
import RecResult from './pages/RecResult';
import Login from './pages/Login';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/recommand" component={Recommand} />
        <Route exact path="/result" component={RecResult} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
export default App;
