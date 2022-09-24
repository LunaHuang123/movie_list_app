import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer
});

export default rootReducer;