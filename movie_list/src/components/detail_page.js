import './detail_page.css';
import configureStore from '../store/store';
import { useState, useEffect } from 'react';
import { fetchSaveMovie } from '../actionCreators/movieDetailsActionCreator';
import STATUS_TYPE from '../reducers/statusTypes';
const store = configureStore();
const baseUrl = "https://image.tmdb.org/t/p/w500";  //Move to constant
function DetailPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    store.dispatch(fetchSaveMovie(props.movieID));
    store.subscribe(()=>{setMovie(store.getState().movieDetails.cachedMovies[props.movieID])});
  }, [props.movieID]);
  if(movie.status !== STATUS_TYPE.success){
    return(<header>Loading...</header>);
  }
  return (
    <div className='detailPage'style={{ backgroundImage: 'url(' + baseUrl + movie.data.backdrop_path + ')', backgroundSize: 'cover' }}>
        <div>{movie.data.title}</div>
        {movie.data.genres && <ul>{movie.data.genres.map(genre => (<li>{genre.name}</li>))}</ul>}
        <div>{movie.data.overview}</div>
        <div>{movie.data.poster_path}</div>
        <div>{movie.data.release_date}</div>
        {movie.data.production_companies && <ul>{movie.data.production_companies.map(company => (<li>{company.name}</li>))}</ul>}
    </div>
  )
}

export default DetailPage;