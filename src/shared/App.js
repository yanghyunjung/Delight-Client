import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Main from "../pages/Main";
import Recommand from "../pages/Recommand";
import RecResult from "../pages/RecResult";
import Login from "../pages/Login";

import Layout from "./Layout";

const App = (props) => {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommand" component={Recommand} />
          <Route exact path="/recommand/:id" component={RecResult} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
