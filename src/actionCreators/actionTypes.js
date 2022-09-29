const ACTION_TYPES = {
  movieDetails: {
      cacheMovieStart: 'movieDetails/cache_movie_start',
      cacheMovieSuccess: 'movieDetails/cache_movie_success',
      cacheMovieFailed: 'movieDetails/cache_movie_failed',
  },
  topRatedPage: {
    // started fetching for a page. 
    // This is to ensure we don't start another fetch of the same page
    // when waiting for the server response
    cachePageStart: 'topRatedpage/cache_page_start',  
    cachePageSuccess: 'topRatedpage/cache_page_success',
    cachePageFailed: 'topRatedpage/cache_page_failed', 
  },
  popularPage: {
    cachePageStart: 'popularPage/cache_page_start',  
    cachePageSuccess: 'popularPage/cache_page_success',
    cachePageFailed: 'popularPage/cache_page_failed', 
  },
  likedList: {
    addMovie: 'likedList/addMovie',
    removeMovie: 'likedList/removeMovie',
  },
  blockedList: {
    addMovie: 'blockedList/addMovie',
    removeMovie: 'blockedList/removeMovie',
  }
}

export default ACTION_TYPES;