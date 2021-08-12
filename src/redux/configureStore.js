// Redux Store
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// Modules
import userSlice from "./modules/user"; // 유저에 reducer
import Food from "./modules/food";
import Category from "./modules/category";
import TagResult from "./modules/tagresult";
import Tag from "./modules/tag";

export const history = createBrowserHistory();

// export한 Reducer를 모으기
const rootReducer = combineReducers({
  food: Food,
  user: userSlice,
  category: Category,
  tagresult: TagResult,
  tag: Tag,
  router: connectRouter(history),
});

// 미들웨어 적용
// history  넣기
const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금의 환경
const env = process.env.NODE_ENV;

//개발환경에서만 보여주는 logger
if (env === "development") {
  const { logger } = require("redux-logger"); // require 패키지 가져오기
  middlewares.push(logger);
}

// Chrome Extension
// Redux devTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 미들웨어와 리듀서를 엮어 store 생성
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
