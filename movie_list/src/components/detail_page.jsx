import './detail_page.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import baseUrl from '../constants/base_url'
import { fetchSaveMovie } from '../actionCreators/movieDetailsActionCreator';
import STATUS_TYPE from '../reducers/statusTypes';

function DetailPage(props) {
  useEffect(() => {
    props.fetchMovieDetail(props.movieID);
  }, [props.movieID]);
  if(props.status !== STATUS_TYPE.success){
    return(<header>Loading...</header>);
  }
  return (
    <div className='detailPage' style={{ backgroundImage: 'url(' + baseUrl + props.data.backdrop_path + ')', backgroundSize: 'cover' }}>
        <div>{props.data.title}</div>
        {props.data.genres && <ul>{props.data.genres.map(genre => (<li>{genre.name}</li>))}</ul>}
        <div>{props.data.overview}</div>
        <div>{props.data.poster_path}</div>
        <div>{props.data.release_date}</div>
        {props.data.production_companies && <ul>{props.data.production_companies.map(company => (<li>{company.name}</li>))}</ul>}
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