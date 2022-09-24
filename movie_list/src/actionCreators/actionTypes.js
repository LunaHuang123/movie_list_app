const ACTION_TYPES = {
  topRatedPage: {
    // started fetching for a page. 
    // This is to ensure we don't start another fetch of the same page
    // when waiting for the server response
    cachePageStart: 'topRatedpage/cache_page_start',  
    cachePageSuccess: 'topRatedpage/cache_page_success',
    cachePageFailed: 'topRatedpage/cache_page_failed', 
  }
}

export default ACTION_TYPES;