import ACTION_TYPES from "../actionCreators/actionTypes";
import STATUS_TYPE from "./statusTypes";

const initialState = {
    cachedPages : {}
}

const popularPageReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case (ACTION_TYPES.popularPage.cachePageStart): 
            newState[action.pageNum] = {status: STATUS_TYPE.start}
            return newState;
        case (ACTION_TYPES.popularPage.cachePageSuccess):
            newState[action.data.page] = {data: action.data, status: STATUS_TYPE.success}
            return newState;
        case (ACTION_TYPES.popularPage.cachePageFailed):
            newState[action.pageNum] = {status: STATUS_TYPE.failed}
            return newState;
        default:
            return state;
        
    }
}

export default popularPageReducer;