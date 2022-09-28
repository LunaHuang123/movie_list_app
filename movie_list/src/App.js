<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopRatedPage from './pages/top_rated_page';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
import LikedMoviesListPage from './pages/liked_movies_list_page';
import BlockedMoviesListPage from './pages/blocked_movies_list_page';
import HomePage from './components/homepage/homepage_container'
import { PAGE_ROUTE } from './constants/page_route';
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path={PAGE_ROUTE.homePage} element={<HomePage/>}/>
          <Route path={PAGE_ROUTE.topRatedPage}>
            <Route index element={<TopRatedPage setShowDetail={setShow}/>}/>
            <Route path=':pageNumber' element={<TopRatedPage setShowDetail={setShow}/>}/>
          </Route>
          <Route path={PAGE_ROUTE.likedListPage} element={<LikedMoviesListPage setShowDetail={setShow} />}/>
          <Route path={PAGE_ROUTE.blockedListPage} element={<BlockedMoviesListPage setShowDetail={setShow}/>}/>
        </Routes>
      </Router>
      <MovieModal showOption={showOption} setShow={setShow}/>
=======
import logo from './logo.svg';
=======
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
import './App.css';
import TopRatedPage from './pages/top_rated_page';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
import LikedMoviesListPage from './pages/liked_movies_list_page';
import BlockedMoviesListPage from './pages/blocked_movies_list_page';
import HomePage from './components/homepage/homepage_container'
import { PAGE_ROUTE } from './constants/page_route';
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
<<<<<<< HEAD
      REACT IS ONLINE!!!
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======
      <Router>
        <Sidebar/>
        <Routes>
          <Route path={PAGE_ROUTE.homePage} element={<HomePage/>}/>
          <Route path={PAGE_ROUTE.topRatedPage}>
            <Route index element={<TopRatedPage setShowDetail={setShow}/>}/>
            <Route path=':pageNumber' element={<TopRatedPage setShowDetail={setShow}/>}/>
          </Route>
          <Route path={PAGE_ROUTE.likedListPage} element={<LikedMoviesListPage setShowDetail={setShow} />}/>
          <Route path={PAGE_ROUTE.blockedListPage} element={<BlockedMoviesListPage setShowDetail={setShow}/>}/>
        </Routes>
      </Router>
      <MovieModal showOption={showOption} setShow={setShow}/>
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======
export default App;
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
