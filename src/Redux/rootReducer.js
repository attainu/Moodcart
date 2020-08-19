import { combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";
import newsReducer from "./Reducers/newsReducer";
import categoryNewsReducer from "./Reducers/categoryNewsReducer";
import countryNewsReducer from "./Reducers/countryNews";

const rootReducer = combineReducers({
  userState: userReducer,
  newsState: newsReducer,
  categoryNewsState: categoryNewsReducer,
  countryNewsState: countryNewsReducer,
});

export default rootReducer;
