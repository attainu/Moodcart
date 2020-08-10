import { combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";
import newsReducer from "./Reducers/newsReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  newsStae: newsReducer,
});

export default rootReducer;
