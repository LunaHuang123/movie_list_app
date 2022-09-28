import ACTION_TYPES from '../actionCreators/actionTypes';
import STATUS_TYPE from './statusTypes';

const initialState = {
  cachedPages : {}
}

const topRatedPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTION_TYPES.topRatedPage.cachePageStart): {
      return {
        ...state,
        cachedPages: {
          ...state.cachedPages,
          [action.payload]: {status: STATUS_TYPE.start}
        }
      };
    }
    case (ACTION_TYPES.topRatedPage.cachePageSuccess): {
      return {
        ...state,
        cachedPages: {
          ...state.cachedPages,
          [action.payload.page]: {data: action.payload, status: STATUS_TYPE.success}
        }
      };
    }
    case (ACTION_TYPES.topRatedPage.cachePageFailed): {
      return {
        ...state,
        cachedPages: {
          ...state.cachedPages,
          [action.payload]: {status: STATUS_TYPE.failed}
        }
      }
    }
    default : 
      return state;
  }
}

export default topRatedPageReducer;