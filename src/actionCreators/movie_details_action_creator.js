import ACTION_TYPES from "./action_types";
import STATUS_TYPE from "../reducers/status_types";
import fetchMovieDetails from "../api/fetch_movie_details";

const startFetchMovie = (movieID) => ({
  type: ACTION_TYPES.movieDetails.cacheMovieStart,
  payload: movieID,
});

const failedFetchMovie = (movieID) => ({ 
  type: ACTION_TYPES.movieDetails.cacheMovieFailed,
  payload: movieID,
});

const cacheMovie = (data) => ({
  type: ACTION_TYPES.movieDetails.cacheMovieSuccess,
  payload: data,
});

const fetchSaveMovie = (movieID) => (dispatch, getState) => {
  const movie = getState().movieDetails.cachedMovies[movieID];
  if (movie && movie.status === STATUS_TYPE.start) {
    // console.log(`fetch for movie ${movieID} is in progress`);
    return;
  }

  if (movie && movie.status === STATUS_TYPE.success) {
    // console.log(`movie ${movieID} is cached`);
    return;
  }

  dispatch(startFetchMovie(movieID)); // fetch started
  fetchMovieDetails(movieID)
    .then(response => dispatch(cacheMovie(response.data))) // fetch sucess, cache data
    .catch(error => {
      console.log(error);
      dispatch(failedFetchMovie(movieID)); // fetch failed
    })
}


export { fetchSaveMovie };