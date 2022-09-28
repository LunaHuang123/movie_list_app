<<<<<<< HEAD
import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";
import topRatedPageReducer from "./topRatedPageReducer";
import popularPageReducer from "./popular_page_reducer";
import likeBlockReducer from "./like_block_reducer";
const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  topRatedPage: topRatedPageReducer,
  popularPage: popularPageReducer,
  likeBlockLists: likeBlockReducer
});


export default rootReducer;
=======


>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
