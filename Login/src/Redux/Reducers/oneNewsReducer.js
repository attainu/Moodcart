import {
  TOGGLE_ONENEWS_FETCHING_STATE,
  GET_RELATEDNEWS,
  GET_ONENEWS,
} from "../actionTypes";

const initialState = {
  onenews: null,
  isOneNewsFetching: false,
  relatedNews: null,
};

const oneNewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ONENEWS:
      return { ...state, onenews: payload };
    case GET_RELATEDNEWS:
      return { ...state, relatedNews: payload };
    case TOGGLE_ONENEWS_FETCHING_STATE:
      return { ...state, isOneNewsFetching: !state.isOneNewsFetching };
    default:
      return state;
  }
};

export default oneNewsReducer;
