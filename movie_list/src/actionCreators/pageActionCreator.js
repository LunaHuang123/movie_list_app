import ACTION_TYPES from "./actionTypes";
import STATUS_TYPE from "../reducers/statusTypes";
import fetchPage from "../api/fetchPage";

// tell store the fetch has started
const startFetchPage = (pageNumber) => ({
  type: ACTION_TYPES.page.cachePageStart,
  payload: pageNumber,
});

// tell store the fetch has failed
const failedFetchPage = (pageNumber) => ({ 
  type: ACTION_TYPES.page.cachePageFailed,
  payload: pageNumber,
});

// let the store save the fetched data
const cachePage = (data) => ({
  type: ACTION_TYPES.page.cachePageSuccess,
  payload: data,
});

// this step is async, so we should return a thunk function
// for react-thunk middleware to handle
const fetchSavePage = (pageNumber) => (dispatch, getState) => {
  const page = getState().page.cachedPages.find(p => p.page === parseInt(pageNumber));
  if (page && page.status === STATUS_TYPE.start) {
    console.log(`fetch for page ${pageNumber} is in progress`);
    return;
  }

  if (page && page.status === STATUS_TYPE.success) {
    console.log(`page ${pageNumber} is cahed`);
    return;
  }

  dispatch(startFetchPage(pageNumber)); // fetch started
  fetchPage(pageNumber)
    .then(response => dispatch(cachePage(response.data))) // fetch sucess, cache data
    .catch(error => {
      console.log(error);
      dispatch(failedFetchPage(pageNumber)); // fetch failed
    })
}


export { fetchSavePage };