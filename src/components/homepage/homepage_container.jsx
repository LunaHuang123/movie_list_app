import {connect} from 'react-redux';
import fetchNewPopularPage from '../../actionCreators/popular_pages_action_creator';
import Homepage from './homepage';

const mSTP = (state) => {
    const popularMoviesList = [];
    if (state.popularPage.cachedPages[1] && state.popularPage.cachedPages[1].data) {
        for(const popularMovie of state.popularPage.cachedPages[1].data.results) {
            popularMoviesList.push(popularMovie)
        };
    }
    return {
        popularList : popularMoviesList  
    }
}

const mDTP = {
    fetchPopularPage: () => fetchNewPopularPage(1)
}

export default connect(mSTP,mDTP)(Homepage)