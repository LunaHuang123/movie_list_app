import React from 'react';
import { useState, useEffect } from 'react';
import Button from './button';
import sampleArray from './sampleArray.json';
import MovieCard from '../movie_card/movie_card_container';
import getSortFunction from '../utils/sort';
// (parent: App) -- blockedMovies --> MovieList 

function MovieList({ movieListData}) {
  const types = ["Title", "Release Date", "Vote Count", "Average Score"];
  const [sortOption, setSortOption] = useState({type: null, isAscending: false});

  movieListData = movieListData || sampleArray;
  movieListData.sort(getSortFunction(sortOption)); // sort the movie list according to sort option
  // const result = postsArray
  // .filter((a,i,b) => b.findIndex((t) => t.moviename === a.moviename) === i)
  // .reduce((agg, item, index) => {
  //   item.id = index + 1;
  //   agg.push(item);
  //   return agg;
  // }, []);
  // console.log(result);

  return (
    <div>
      <Button types={types} sortOption={sortOption} setSortOption = {setSortOption}/>
      <div>
        {movieListData.map(movie => 
          <MovieCard
            key={movie.id}
            title={movie.title}
            movieId={parseInt(movie.id)}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_count}
            score={movie.vote_average}
            description={movie.overview}
          />)}
      </div>
    </div>
  )
}

export default MovieList;