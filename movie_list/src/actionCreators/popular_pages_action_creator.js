import ACTION_TYPES from "./actionTypes";
import STATUS_TYPE from "../reducers/statusTypes";
import fetchPopularPage  from "../api/fetch_popular_page";

const startFetchPage = (pageNum) => ({
    type: ACTION_TYPES.popularPage.cachePageStart,
    pageNum
});

//receive popular page error
const failedFetchPage = (pageNum) => ({
    type:ACTION_TYPES.popularPage.cachePageFailed,
    pageNum
});

//recieve popular page
const cachePage = data => ({
    type: ACTION_TYPES.popularPage.cachePageSuccess,
    data
});

const fetchNewPopularPage = (pageNum) => (dispatch, getState) => {
    const page = getState().popularPage.cachedPages[pageNum];

    if (page && page.status === STATUS_TYPE.start) {
        return;
    }
    
    if (page && page.status === STATUS_TYPE.success) {
      return;
    }

    // dispatch(startFetchPage(pageNum))
    fetchPopularPage(pageNum)
    .then(response => dispatch(cachePage(response.data))) // fetch sucess, cache data
    .catch(error => {
      console.log(error);
      dispatch(failedFetchPage(pageNum)); // fetch failed
    })
}

export default fetchNewPopularPage;

