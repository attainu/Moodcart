import {
  TOGGLE_NEWS_FETCHING_STATE,
  GET_NEWS_BY_COUNTRY,
} from "../actionTypes";

const initialState = {
  countryNews: null,
  isNewsFetching: false,
};

const countryNewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS_BY_COUNTRY:
      return { ...state, countryNews: payload };
    case TOGGLE_NEWS_FETCHING_STATE:
      return { ...state, isNewsFetching: !state.isNewsFetching };
    default:
      return state;
  }
};

export default countryNewsReducer;
