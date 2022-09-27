import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopRatedPage from './pages/top_rated_page';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
import LikedMoviesListPage from './pages/liked_movies_list_page';
import BlockedMoviesListPage from './pages/blocked_movies_list_page';

function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='top_rated'>
            <Route index element={<TopRatedPage />}/>
            <Route path=':pageNumber' element={<TopRatedPage />}/>
          </Route>
          <Route path='liked_movies' element={<LikedMoviesListPage />}/>
          <Route path='blocked_movies' element={<BlockedMoviesListPage />}/>
        </Routes>
      </Router>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
