import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";
import topRatedPageReducer from "./topRatedPageReducer";
import popularPageReducer from "./popular_page_reducer";
const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  topRatedPage: topRatedPageReducer,
  popularPage: popularPageReducer
});


export default rootReducer;