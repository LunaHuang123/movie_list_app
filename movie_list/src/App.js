import './App.css';
import MovieModal from './components/movie_modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() { //simulating multiple MovieCard components here
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <button onClick={()=>{setShow({show:true,movieID:2})}}>{/*should receive ID from props.movieID*/}
        show 1
      </button>
      <button onClick={()=>{setShow({show:true,movieID:278})}}>{/*should receive ID from props.movieID*/}
        show 2
      </button>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
