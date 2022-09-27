import { useState } from 'react';
import './App.css';

import MovieList from './components/movieListComponent/layout' ;

function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <MovieList/>
  );
}

export default App;
