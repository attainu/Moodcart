import { TOGGLE_NEWS_FETCHING_STATE, GET_NEWS } from "../actionTypes";

const initialState = {
  news: [],
  isNewsFetching: false,
};

const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return { ...state, news: payload };
    case TOGGLE_NEWS_FETCHING_STATE:
      return { ...state, isNewsFetching: !state.isNewsFetching };
    default:
      return state;
  }
};

export default newsReducer;
