import fetchMovieDetail, { fetchSaveMovie } from '../actionCreators/movieDetailsActionCreator';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return (
        {
            id: ownProps.movieId,
            data: state.movieDetails.cachedMovies.data
        }
    )
}

const mapDispatchToProps = {
    fetchMovieDetail : (id) => fetchSaveMovie(id)
}

export default connect(mapStateToProps,mapDispatchToProps)(testComp)

const testComp = (props) => {

    return (
        <button onClick={() => props.fetchMovieDetail(props.id)}>Click me to fetch</button>
    )
}
