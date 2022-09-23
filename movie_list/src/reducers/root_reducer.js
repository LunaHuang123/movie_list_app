import { combineReducers } from "redux";
import topRatedPageReducer from "./topRatedPageReducer";

const rootReducer = combineReducers({
  topRatedPage: topRatedPageReducer
});

export default rootReducer;