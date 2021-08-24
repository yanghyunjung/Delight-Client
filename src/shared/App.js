import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Loader from "react-loader-spinner";
import styled from "styled-components";

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
        <Suspense
          fallback={
            <StyledLoader type="Oval" color="#ffa012" height={30} width={50} />
          }
        >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/recommendation" component={Recommend} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/recommendation/spinner" component={Spinner} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/main/chat" component={MainChat} />
            <Route
              exact
              path="/recommendation/chat"
              component={UserRecommend}
            />
            <Route exact path="/mypage" component={MyPage} />
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

const StyledLoader = styled(Loader)`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
export default App;
