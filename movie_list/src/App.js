import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import MovieList from './components/movieListComponent/layout';
=======
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
>>>>>>> 6dc018f5709f6d79ba5769a389b7ea4b20628b15

function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
<<<<<<< HEAD
      <MovieList/>
=======
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
>>>>>>> 6dc018f5709f6d79ba5769a389b7ea4b20628b15
    </div>
  );
}

export default App;
