import configureStore from '../store/store';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from '../actionCreators/like_block_action_creator';
const myStore = configureStore(); //Assume the buttons are connected to temporary redux store, need to connect the component to real store later
let prevLikedList = {};
let prevBlockedList = {}; //check reference
function LikeBlockStoreTest() {
  return (
    <div className="LikeBlockStoreTest">
      <button onClick={()=>{
        prevLikedList = myStore.getState().likeBlockLists.likedList;
        prevBlockedList = myStore.getState().likeBlockLists.blockedList;
        myStore.dispatch(likeMovie(278,1));/*get movieID and pageNum from props*/
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
        myStore.dispatch(likeMovie(2,1));/*get movieID and pageNum from props*/
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
        myStore.dispatch(unlikeMovie(278,1));
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
        myStore.dispatch(blockMovie(278,1));
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
        myStore.dispatch(unblockMovie(278,1));
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