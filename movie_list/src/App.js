import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopRatedPage from './pages/top_rated_page';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';


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
        </Routes>
      </Router>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;
