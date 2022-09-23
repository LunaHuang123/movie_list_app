const ACTION_TYPES = {
  page: {
    // started fetching for a page. 
    // This is to ensure we don't start another fetch of the same page
    // when waiting for the server response
    cachePageStart: 'page/cache_page_start',  
    cachePageSuccess: 'page/cache_page_success',
    cachePageFailed: 'page/cache_page_failed', 
  }
}

export default ACTION_TYPES;