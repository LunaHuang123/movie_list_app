import React from 'react';
import MovieCard from '../movie_card/movie_card';
import { connect } from 'react-redux';
import FROM_LIST from '../../constants/from_list';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from '../../actionCreators/like_block_action_creator';

function LikeBlockMoviesList (props) {
  // from fromList can be one of the following values 'liked_list', 'blocked_list',
  // and help MovieCard Component to decide how to render
  let { movies, fromList} = props;
  if (movies.length === 0) {
    return (
      fromList === FROM_LIST.likedList
        ?<p> Your Liked Movies List Is Empty. </p>
        :<p> Your Blocked Movies List Is Empty.</p>
    );
  }
  return (
    <div className='likeblock-list' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
      {movies.map(
        movie => 
          <MovieCard 
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            posterPath={movie.posterPath}
          />
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const movies = [];
  const list = ownProps.fromList === FROM_LIST.likedList
    ?state.likeBlockLists.likedList
    :state.likeBlockLists.blockedList;
  for (let movieID in list) {
    movies.push({
      ...list[movieID],
      id: movieID
    });
  }
  return {movies};
}

export default connect(mapStateToProps, {})(LikeBlockMoviesList);