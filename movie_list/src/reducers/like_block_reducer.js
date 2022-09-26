import ACTION_TYPES from '../actionCreators/actionTypes';

const initialState = {
  likedList : {},
  blockedList: {}
}

const likeBlockReducer = (state = initialState, action) => {
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
        delete state.likedList[action.payload.movieID];
        return state;
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
        delete state.blockedList[action.payload.movieID];
        return state;
    }  
    default : 
      return state;
  }
}

export default likeBlockReducer;