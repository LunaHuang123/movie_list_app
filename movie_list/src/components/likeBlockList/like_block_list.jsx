import React from 'react';
import MovieCard from '../movie_card/movie_card_container';
import { connect } from 'react-redux';
import FROM_LIST from '../../constants/from_list';
import { Link } from 'react-router-dom';
import {PAGE_ROUTE} from '../../constants/page_route';
import './like_block_list.css';

function LikeBlockMoviesList (props) {
  // from fromList can be one of the following values 'liked_list', 'blocked_list',
  // and help MovieCard Component to decide how to render
  let { movies, fromList, setShowDetail} = props;
  if (movies.length === 0) {
    return (
      fromList === FROM_LIST.likedList
        ?<>
          <p style={{paddingTop: '25vh'}}> Your Liked Movies List Is Empty. </p>
          <p> 
            Your can add movies to your Liked Movies List from&nbsp;
            <Link to={'/' + PAGE_ROUTE.topRatedPage}>Top Rated Movies</Link>.
          </p>
        </>
        :<>
          <p style={{paddingTop: '25vh'}}> Your Blocked Movies List Is Empty.</p>
          <p> 
            Your can add movies to your Blocked Movies List from&nbsp; 
            <Link to={'/' + PAGE_ROUTE.topRatedPage}>Top Rated Movies</Link>.
          </p>
        </>
    );
  }
  return (
    <div className='likeblock-list'>
      {movies.map(
        movie => 
          <MovieCard 
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            posterPath={movie.posterPath}
            showDetails
            imgClickHandler={() => setShowDetail({show: true, movieID: movie.id})}
            like={movie.isLike}
            block={movie.isBlock}
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
      id: movieID,
      isLike: state.likeBlockLists.likedList.hasOwnProperty(movieID),
      isBlock: !!(state.likeBlockLists.blockedList[movieID])
    });
  }
  return {movies};
}

export default connect(mapStateToProps, {})(LikeBlockMoviesList);