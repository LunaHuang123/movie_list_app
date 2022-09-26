import React from 'react';
import { useState, useEffect } from 'react';
import Button from './button';
import sampleArray from './sampleArray.json';
import MovieCard from '../movie_card';
// (parent: App) -- blockedMovies --> MovieList 

function MovieList({ movieListData, blockedMovies }) {
  const types = ["Title", "Release Date", "Vote Count", "Vote Average"];
  const [active, setActive] = useState(types[0]);
  movieListData = movieListData || sampleArray;
    
      // const result = postsArray
      // .filter((a,i,b) => b.findIndex((t) => t.moviename === a.moviename) === i)
      // .reduce((agg, item, index) => {
      //   item.id = index + 1;
      //   agg.push(item);
      //   return agg;
      // }, []);
      // console.log(result);

  // later when sort button is completed add sorting function
  // when blocked list is completed add filter function
  // const displayedMovies = movieListData
  //   .filter( movie => check movie is (NOT) in blockMovies )
  //   .sort(... sorting logic )

  return (
    <div>
      <Button active={active} setActive={setActive} types={types}/>
      <div>
        {movieListData.map(movie => 
          <MovieCard
            key={movie.id}
            title={movie.title}
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