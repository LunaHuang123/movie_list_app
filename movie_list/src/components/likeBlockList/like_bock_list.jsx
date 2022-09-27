import React from 'react';
import MovieCard from '../movie_card';
import { connect } from 'react-redux';
import FROM_LIST from '../../constants/from_list';
import { likeMovie, unlikeMovie, blockMovie, unblockMovie } from '../../actionCreators/like_block_action_creator';

function LikeBlockMoviesList (props) {
  // from fromList can be one of the following values 'liked_list', 'blocked_list',
  // and help MovieCard Component to decide how to render
  let { movies, fromList, likeMovie, unlikeMovie, blockMovie, unblockMovie} = props;
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
            movieID={movie.id}
            title={movie.title}
            posterPath={movie.posterPath}
            likeMovie={likeMovie}
            unlikeMovie={unlikeMovie}
            blockMovie={blockMovie}
            unblockMovie={unblockMovie}
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

const mapDispatchToProps = {likeMovie, unlikeMovie, blockMovie, unblockMovie};

export default connect(mapStateToProps, mapDispatchToProps)(LikeBlockMoviesList);