import React from 'react';
import MovieCard from '../movie_card';
import { connect } from 'react-redux';

function LikeBlockList (props) {
  let { likedMovies, addMovieToLikeList, addMovieToBlockList, removeMovieFromLikeList, removeMovieFromBlockList } = props;
  return (
    <div className='likeblock-list' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
      {likedMovies.map(
        movie => 
          <MovieCard 
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_count}
            score={movie.vote_average}
            description={movie.overview}
            movieID={movie.id}
            moviePageNumber={movie.pageNumber}
            addMovieToLikeList={addMovieToLikeList}
            addMovieToBlockList={addMovieToBlockList}
            removeMovieFromLikeList={removeMovieFromLikeList}
            removeMovieFromBlockList={removeMovieFromBlockList}
          />
      )}
    </div>
  );
}