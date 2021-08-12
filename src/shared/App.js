import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Recommand from "../pages/Recommand";
import RecResult from "../pages/RecResult";
import Login from "../pages/Login";
import Layout from "./Layout";
import Search from "../pages/Search";

const App = (props) => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommendation" component={Recommand} />
          <Route exact path="/recommendation/:id" component={RecResult} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
