import ACTION_TYPES from "./action_types";
import STATUS_TYPE from "../reducers/status_types";
import fetchTopRatedPage from "../api/fetch_top_rated_page";

// tell store the fetch has started
const startFetchPage = (pageNumber) => ({
  type: ACTION_TYPES.topRatedPage.cachePageStart,
  payload: pageNumber,
});

// tell store the fetch has failed
const failedFetchPage = (pageNumber) => ({ 
  type: ACTION_TYPES.topRatedPage.cachePageFailed,
  payload: pageNumber,
});

// let the store save the fetched data
const cachePage = (data) => ({
  type: ACTION_TYPES.topRatedPage.cachePageSuccess,
  payload: data,
});

// this step is async, so we should return a thunk function
// for react-thunk middleware to handle
const fetchSaveTopRatedPage = (pageNumber) => (dispatch, getState) => {
  const page = getState().topRatedPage.cachedPages[pageNumber];
  if (page && page.status === STATUS_TYPE.start) {
    // console.log(`fetch for page ${pageNumber} is in progress`);
    return;
  }

  if (page && page.status === STATUS_TYPE.success) {
    // console.log(`page ${pageNumber} is cahed`);
    return;
  }

  dispatch(startFetchPage(pageNumber)); // fetch started
  fetchTopRatedPage(pageNumber)
    .then(response => dispatch(cachePage(response.data))) // fetch sucess, cache data
    .catch(error => {
      console.log(error);
      dispatch(failedFetchPage(pageNumber)); // fetch failed
    })
}


export { fetchSaveTopRatedPage };