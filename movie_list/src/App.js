import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
      <button onClick={()=>{setShow({show:true,movieID:2})}}>{/*should receive ID from props.movieID*/}
        movie 1
      </button>
      <button onClick={()=>{setShow({show:true,movieID:278})}}>{/*should receive ID from props.movieID*/}
        movie 2
      </button>
      <button onClick={()=>{setShow({show:true,movieID:573})}}>{/*should receive ID from props.movieID*/}
        movie 3
      </button>
      <button onClick={()=>{setShow({show:true,movieID:3})}}>{/*should receive ID from props.movieID*/}
        movie 4
      </button>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
