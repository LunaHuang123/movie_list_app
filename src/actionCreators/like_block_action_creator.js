import ACTION_TYPES from "./action_types";

const likeMovie = (movieID,pageNum) => ({
  type: ACTION_TYPES.likedList.addMovie,
  payload: {
    movieID: movieID,
    pageNum:pageNum
  }
});

const unlikeMovie = (movieID,pageNum) => ({ 
  type: ACTION_TYPES.likedList.removeMovie,
  payload: {
    movieID: movieID,
    pageNum:pageNum
  }
});

const blockMovie = (movieID,pageNum) => ({
  type: ACTION_TYPES.blockedList.addMovie,
  payload: {
    movieID: movieID,
    pageNum:pageNum
  }
});

const unblockMovie = (movieID,pageNum) => ({
    type: ACTION_TYPES.blockedList.removeMovie,
    payload: {
        movieID: movieID,
        pageNum:pageNum
    }
});


export { likeMovie, unlikeMovie, blockMovie, unblockMovie};