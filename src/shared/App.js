import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Recommend from "../pages/Recommend";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Layout from "./Layout";
import Spinner from "../components/Spinner";
import Search from "../pages/Search";

const App = (props) => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommendation" component={Recommend} />
          <Route exact path="/recommendation/:id" component={Result} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/spinner" component={Spinner} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
