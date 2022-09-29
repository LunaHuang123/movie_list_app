import ACTION_TYPES from '../actionCreators/actionTypes';
import STATUS_TYPE from './statusTypes';

const initialState = {
  cachedMovies : {}
}

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTION_TYPES.movieDetails.cacheMovieStart): {
      return {
        ...state,
        cachedMovies: {
          ...state.cachedMovies,
          [action.payload]: {status: STATUS_TYPE.start}
        }
      };
    }
    case (ACTION_TYPES.movieDetails.cacheMovieSuccess): {
      return {
        ...state,
        cachedMovies: {
          ...state.cachedMovies,
          [action.payload.id]: {data: action.payload, status: STATUS_TYPE.success}
        }
      };
    }
    case (ACTION_TYPES.movieDetails.cacheMovieFailed): {
      return {
        ...state,
        cachedMovies: {
          ...state.cachedMovies,
          [action.payload]: {status: STATUS_TYPE.failed}
        }
      }
    }
    default : 
      return state;
  }
}

export default movieDetailsReducer;