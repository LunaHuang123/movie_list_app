import fetchMovieDetail, { fetchSaveMovie } from '../actionCreators/movieDetailsActionCreator';
import {connect} from 'react-redux'
import { useEffect } from 'react';
const mapStateToProps = (state, ownProps) => {
    return (
        {
            id: ownProps.movieId,
            status: state.movieDetails.cachedMovies[ownProps.movieId]? state.movieDetails.cachedMovies[ownProps.movieId].status : null,
            data: state.movieDetails.cachedMovies[ownProps.movieId]? state.movieDetails.cachedMovies[ownProps.movieId].data : null,
        }
    )
}

const mapDispatchToProps = {
    fetchMovieDetail : (id) => fetchSaveMovie(id)
}

const TestComp = (props) => {
    useEffect(() => {props.fetchMovieDetail(props.id)}, [props.id])
    let message = 'No data';
    if (props.status === 'SUCCESS') {
        message = props.data.title;
    }
    if (props.status === 'START') {
        message = 'loading';
    }

    return (
        <>
            {
                message
            }
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TestComp)