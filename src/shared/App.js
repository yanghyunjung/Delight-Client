import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Recommend from "../pages/Recommend";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Layout from "./Layout";

const App = (props) => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommendation" component={Recommend} />
          <Route exact path="/recommendation/:id" component={Result} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
