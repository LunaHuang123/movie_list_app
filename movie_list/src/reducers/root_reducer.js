import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";
import topRatedPageReducer from "./topRatedPageReducer";
const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  topRatedPage: topRatedPageReducer
});

export default rootReducer;