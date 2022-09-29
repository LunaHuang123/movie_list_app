
import { combineReducers } from "redux";
import movieDetailsReducer from "./movie_details_reducer";
import topRatedPageReducer from "./top_rated_page_reducer";
import popularPageReducer from "./popular_page_reducer";
import likeBlockReducer from "./like_block_reducer";
const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  topRatedPage: topRatedPageReducer,
  popularPage: popularPageReducer,
  likeBlockLists: likeBlockReducer
});
export default rootReducer;

