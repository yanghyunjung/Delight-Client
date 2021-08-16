import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import Recommend from "../pages/Recommend";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Layout from "./Layout";
import Spinner from "../components/Spinner";
import Search from "../pages/Search";
import MainChat from "../components/MainChat";
import UserRecommend from "../components/UserRecommend";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommendation/:id" component={Recommend} />
          <Route exact path="/result/:id" component={Result} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recommendation/:id/spinner" component={Spinner} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/main/:id" component={MainChat} />
          <Route
            exact
            path="/recommendation/:id/user"
            component={UserRecommend}
          />
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};
export default App;
