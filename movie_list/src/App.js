import './App.css';
import MovieModal from './components/movie_modal';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <MovieModal movieID={278}/>
    </div>
  );
}

export default App;
