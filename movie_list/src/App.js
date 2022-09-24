import './App.css';
import { useState } from 'react';
import configureStore from './store/store';
import { fetchSaveMovie } from './actionCreators/movieDetailsActionCreator';
import MovieList from './components/movieListComponent/layout';

const store = configureStore();
function App() {
  const [movieID, setmovieID] = useState(1);

  return (
    <div className="App">
    <MovieList></MovieList>
      <input onChange={(e)=>{setmovieID(e.target.value)}}/>
      <button onClick={()=>{
        console.log(movieID);
        store.dispatch(fetchSaveMovie(movieID));
        setTimeout(() => console.log(store.getState()), 1000);
      }}>show</button>
    </div>
  );
}
export default App;