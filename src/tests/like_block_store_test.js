// import configureStore from '../store/store';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from '../actionCreators/like_block_action_creator';
// const myStore = configureStore(); //Assume the buttons are connected to temporary redux store, need to connect the component to real store later
let prevLikedList = {};
let prevBlockedList = {}; //check reference

const movieOne = {
  id: 616037,
  payload: {
    title: 'Thor: Love and Thunder',
    posterPath:'/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
  }
};
const movieTwo = {
  id: 19995,
  payload: {
    title: 'Avatar',
    posterPath: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg'
  }
};

function LikeBlockStoreTest(props) {
  const myStore = props.store;
  return (
    <div className="LikeBlockStoreTest">
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(likeMovie(movieOne.id, movieOne.payload));/*get movieID and pageNum from props*/
        console.log("prevLikedList: ",prevLikedList);
        console.log("prevBlockedList: ",prevBlockedList);
        console.log("likedlist now: ",myStore.getState().likeBlockLists.likedList);
        console.log("blockedlist now: ",myStore.getState().likeBlockLists.blockedList);
        console.log("Same Liked List: ",prevLikedList === myStore.getState().likeBlockLists.likedList);
        console.log("Same Blocked List: ",prevBlockedList === myStore.getState().likeBlockLists.blockedList);}}>
        like 1
      </button>
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(likeMovie(movieTwo.id, movieTwo.payload));/*get movieID and pageNum from props*/
        console.log("prevLikedList: ",prevLikedList);
        console.log("prevBlockedList: ",prevBlockedList);
        console.log("likedlist now: ",myStore.getState().likeBlockLists.likedList);
        console.log("blockedlist now: ",myStore.getState().likeBlockLists.blockedList);
        console.log("Same Liked List: ",prevLikedList === myStore.getState().likeBlockLists.likedList);
        console.log("Same Blocked List: ",prevBlockedList === myStore.getState().likeBlockLists.blockedList);}}>
        like 2
      </button>
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(unlikeMovie(movieOne.id));
        console.log("prevLikedList: ",prevLikedList);
        console.log("prevBlockedList: ",prevBlockedList);
        console.log("likedlist now: ",myStore.getState().likeBlockLists.likedList);
        console.log("blockedlist now: ",myStore.getState().likeBlockLists.blockedList);
        console.log("Same Liked List: ",prevLikedList === myStore.getState().likeBlockLists.likedList);
        console.log("Same Blocked List: ",prevBlockedList === myStore.getState().likeBlockLists.blockedList);}}>
        unlike 1
      </button>
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(blockMovie(movieOne.id, movieOne.payload));
        console.log("prevLikedList: ",prevLikedList);
        console.log("prevBlockedList: ",prevBlockedList);
        console.log("likedlist now: ",myStore.getState().likeBlockLists.likedList);
        console.log("blockedlist now: ",myStore.getState().likeBlockLists.blockedList);
        console.log("Same Liked List: ",prevLikedList === myStore.getState().likeBlockLists.likedList);
        console.log("Same Blocked List: ",prevBlockedList === myStore.getState().likeBlockLists.blockedList);}}>
        block 1
      </button>
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(unblockMovie(movieOne.id));
        console.log("prevLikedList: ",prevLikedList);
        console.log("prevBlockedList: ",prevBlockedList);
        console.log("likedlist now: ",myStore.getState().likeBlockLists.likedList);
        console.log("blockedlist now: ",myStore.getState().likeBlockLists.blockedList);
        console.log("Same Liked List: ",prevLikedList === myStore.getState().likeBlockLists.likedList);
        console.log("Same Blocked List: ",prevBlockedList === myStore.getState().likeBlockLists.blockedList);}}>
        unblock 1
      </button>
    </div>
  );
}
export default LikeBlockStoreTest;



