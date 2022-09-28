<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
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


<<<<<<< HEAD
export default rootReducer;
=======


>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======
export default rootReducer;
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
