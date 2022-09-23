import ACTION_TYPES from '../actionCreators/actionTypes';
import STATUS_TYPE from './statusTypes';

const initialState = {
  cachedPages : []
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTION_TYPES.page.cachePageStart): {
      const newPageData = {}; // create a placeholder for page ${action.payload} 
      newPageData.page = parseInt(action.payload); // action.payload is the page number
      newPageData.status = STATUS_TYPE.start;

      return {
        ...state,
        cachedPages: state.cachedPages.concat(newPageData)
      };
    }
    case (ACTION_TYPES.page.cachePageSuccess): {
      return {
        ...state,
        cachedPages: state.cachedPages.map( page => {
          if (page.page === parseInt(action.payload.page)) // action.payload is the fetched data
            return {
              ...page,
              status: STATUS_TYPE.success,
              data: action.payload
            };
          return page;
        } )
      };
    }
    case (ACTION_TYPES.page.cachePageFailed): {
      return {
        ...state,
        cachedPages: state.cachedPages.map ( page => {
          if (page.page === parseInt(action.payload)) // action.payload is the page number
            return {
              ...page,
              status: STATUS_TYPE.failed
            }
          return page;
        })
      }
    }
    default : 
      return state;
  }
}

export default pageReducer;