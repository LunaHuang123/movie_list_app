import { combineReducers } from "redux";
import popularPageReducer from "./popular_page_reducer";
import topRatedPageReducer from "./topRatedPageReducer";

const rootReducer = combineReducers({
  topRatedPage: topRatedPageReducer,
  popularPage: popularPageReducer
});

export default rootReducer;