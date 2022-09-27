import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MovieList from './components/movieListComponent/layout';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
import HomePage from './components/homepage/homepage_container'

import LikeBlockStoreTest from './tests/likeBlockStoreTest';
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    // <div className="App">
    //   <Router>
    //     <Sidebar/>
    //   </Router>
    //   <button onClick={()=>{setShow({show:true,movieID:2})}}>{/*should receive ID from props.movieID*/}
    //     movie 1
    //   </button>
    //   <button onClick={()=>{setShow({show:true,movieID:278})}}>{/*should receive ID from props.movieID*/}
    //     movie 2
    //   </button>
    //   <button onClick={()=>{setShow({show:true,movieID:573})}}>{/*should receive ID from props.movieID*/}
    //     movie 3
    //   </button>
    //   <button onClick={()=>{setShow({show:true,movieID:3})}}>{/*should receive ID from props.movieID*/}
    //     movie 4
    //   </button>
    //   <MovieModal showOption={showOption} setShow={setShow}/>
    // </div>
    <HomePage/>
  );
}

export default App;
