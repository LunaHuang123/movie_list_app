import ACTION_TYPES from '../actionCreators/actionTypes';

const initialState = {
  likedList : {},
  blockedList: {}
}

const likeBlockReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case (ACTION_TYPES.likedList.addMovie): {
        if(state.blockedList[action.payload.movieID]) delete state.blockedList[action.payload.movieID];
        return {
        ...state,
        likedList: {
            ...state.likedList,
            [action.payload.movieID]: action.payload.pageNum
        }
        };
    }
    case (ACTION_TYPES.likedList.removeMovie): {
        delete newState.likedList[action.payload.movieID];
        return newState;
    } 
    case (ACTION_TYPES.blockedList.addMovie): {
        if(state.likedList[action.payload.movieID]) delete state.likedList[action.payload.movieID];
        return {
        ...state,
        blockedList: {
            ...state.blockedList,
            [action.payload.movieID]: action.payload.pageNum
        }
        };
    }
    case (ACTION_TYPES.blockedList.removeMovie): {
        delete newState.blockedList[action.payload.movieID];
        return newState;
    }  
    default : 
      return state;
  }
}

export default likeBlockReducer;