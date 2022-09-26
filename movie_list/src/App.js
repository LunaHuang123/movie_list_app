import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MovieList from './components/movieListComponent/layout';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';

import configureStore from './store/store';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from './actionCreators/like_block_action_creator';
const myStore = configureStore(); //Assume the buttons are connected to temporary redux store, need to connect the component to real store later
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
      <button onClick={()=>{myStore.dispatch(likeMovie(278,1));console.log(myStore.getState().likeBlockLists);}}>{/*get movieID and pageNum from props*/}
        like
      </button>
      <button onClick={()=>{myStore.dispatch(unlikeMovie(278,1));console.log(myStore.getState().likeBlockLists);}}>
        unlike
      </button>
      <button onClick={()=>{myStore.dispatch(blockMovie(278,1));console.log(myStore.getState().likeBlockLists);}}>
        block
      </button>
      <button onClick={()=>{myStore.dispatch(unblockMovie(278,1));console.log(myStore.getState().likeBlockLists);}}>
        unblock
      </button>
      <MovieList/>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
