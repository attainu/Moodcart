import {
  TOGGLE_NEWS_FETCHING_STATE,
  GET_NEWS_BY_CATEGORY,
} from "../actionTypes";

const initialState = {
  categoryNews: null,
  isNewsFetching: false,
};

const categoryNewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS_BY_CATEGORY:
      return { ...state, categoryNews: payload };
    case TOGGLE_NEWS_FETCHING_STATE:
      return { ...state, isNewsFetching: !state.isNewsFetching };
    default:
      return state;
  }
};

export default categoryNewsReducer;
