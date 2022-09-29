import './detail_page.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import baseUrl from '../constants/base_url'
import { fetchSaveMovie } from '../actionCreators/movieDetailsActionCreator';
import STATUS_TYPE from '../reducers/statusTypes';

function DetailPage(props) {
  useEffect(() => {
    props.fetchMovieDetail(props.movieID);
  }, [props]);
  if(props.status !== STATUS_TYPE.success){
    return(<header>Loading...</header>);
  }
  return (
    <div className='detailPage' style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(' + baseUrl + props.data.backdrop_path + ')', backgroundSize: 'cover' }}>
      <img id="dp_poster" src={baseUrl+props.data.poster_path} alt={''}/>
      <div id="dp_content">
        <div id="dp_title">{props.data.title}</div>
        {props.data.genres && <div id="dp_genres">{props.data.genres.map(genre => (<div className={genre.name}>{genre.name}</div>))}</div>}
        <div id="dp_overview">Overview: {props.data.overview}</div>
        <div id="dp_release_date">Release Date: {props.data.release_date}</div>
        {props.data.production_companies && <div id="dp_companies">Production Companies:{props.data.production_companies.map(company => (<div key={company.name}>{company.name}</div>))}</div>}
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return (
      {
          id: ownProps.movieID,
          status: state.movieDetails.cachedMovies[ownProps.movieID]? state.movieDetails.cachedMovies[ownProps.movieID].status : null,
          data: state.movieDetails.cachedMovies[ownProps.movieID]? state.movieDetails.cachedMovies[ownProps.movieID].data : null,
      }
  )
}
const mapDispatchToProps = {
  fetchMovieDetail : (id) => fetchSaveMovie(id)
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage);