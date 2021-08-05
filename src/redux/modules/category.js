import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import instance from "../../shared/api.js";

const GET_CATEGORIES = "GET_CATEGORIES";

const getCategories = createAction(GET_CATEGORIES, (categories) => ({
  categories,
}));

const serverIP = "http://localhost:3000/";

const initialState = {
  category_list: [
    {
        categoryId: "1",
        name: "수육백반",
        recommendedCnt: "62",
        imgUrl: "www.image.png",
    },
  ],
};

const getCategoriesDB = () => {
  return function (dispatch, getState, { history }) {
    instance.get("/api/rank/recommendations").then((result) => {
      dispatch(getCategories(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_CATEGORIES]: (state, action) => {
      return produce(state, (draft) => {
        draft.category_list = action.payload.categories;
      });
    },
  },
  initialState
);

const actionCreators = {
  getCategories,
  getCategoriesDB,
};

export { actionCreators };