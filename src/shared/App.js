import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Layout from "./Layout";

const Main = lazy(() => import("../pages/Main"));
const Recommend = lazy(() => import("../pages/Recommend"));
const Result = lazy(() => import("../pages/Result"));
const Login = lazy(() => import("../pages/Login"));
const Search = lazy(() => import("../pages/Search"));
const Spinner = lazy(() => import("../components/Spinner"));
const MainChat = lazy(() => import("../components/MainChat"));
const UserRecommend = lazy(() => import("../components/UserRecommend"));
const MyPage = lazy(() => import("../pages/MyPage"));

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/recommendation/:id" component={Recommend} />
            <Route exact path="/result/:id" component={Result} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/recommendation/:id/spinner"
              component={Spinner}
            />
            <Route exact path="/search" component={Search} />
            <Route exact path="/main/:id" component={MainChat} />
            <Route
              exact
              path="/recommendation/:id/user"
              component={UserRecommend}
            />
            <Route exact path="/mypage" component={MyPage} />
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};
export default App;
