import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopRatedPage from './pages/top_rated_page';
import MovieModal from './components/movie_modal';
import Sidebar from './components/sidebar/sidebar';
import LikedMoviesListPage from './pages/liked_movies_list_page';
import BlockedMoviesListPage from './pages/blocked_movies_list_page';
import HomePage from './components/homepage/homepage_container'
import { PAGE_ROUTE } from './constants/page_route';
import ScrollTopWrapper from './components/scrollTopWrapper/scroll_top_wrapper';
import ErrorBoundary from './components/errorBoundary/error_boundary';
function App() {
  const [showOption,setShow] = useState({show:false,movieID:null});
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <ScrollTopWrapper>
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
          </ScrollTopWrapper>
        </ErrorBoundary>
      </Router>
      <MovieModal showOption={showOption} setShow={setShow}/>
    </div>
  );
}

export default App;