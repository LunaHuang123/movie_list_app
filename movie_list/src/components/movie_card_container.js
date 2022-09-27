import React from 'react';
import {connect} from 'react-redux';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from '../actionCreators/like_block_action_creator';
import MovieCard from './movie_card/movie_card';

const mDTP = {
    likeMovie : (movieId, data) => likeMovie(movieId, data),
    unlikeMovie : (movieId) => unlikeMovie(movieId),
    blockMovie: (movieId, data) => blockMovie(movieId, data),
    unblockMovie : (movieId) => unblockMovie(movieId)
}

export default connect (null,mDTP)(MovieCard)