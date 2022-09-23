import { combineReducers } from "redux";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  page: pageReducer
});

export default rootReducer;