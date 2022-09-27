import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MovieList from './components/movieListComponent/layout';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';

import LikeBlockStoreTest from './tests/likeBlockStoreTest';
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
      <LikeBlockStoreTest/>
      <MovieList/>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
