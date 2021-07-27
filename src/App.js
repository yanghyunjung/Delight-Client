import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Recommand from "./pages/Recommand";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/recommand" component={Recommand} />
      </Switch>
    </Router>
  );
};
export default App;
