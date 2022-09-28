import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './button';
import sampleArray from './sampleArray.json';
import MovieCard from '../movie_card/movie_card_container';
import getSortFunction from '../utils/sort';
import STATUS_TYPE from '../../reducers/statusTypes';
// (parent: App) -- blockedMovies --> MovieList 

function MovieList({ movieListData, status, setShowDetail}) {
  const types = ["Title", "Release Date", "Vote Count", "Average Score"];
  const [sortOption, setSortOption] = useState({type: null, isAscending: false});
  const likeList = useSelector((state) => state.likeBlockLists.likedList);
  const blockList = useSelector((state) => state.likeBlockLists.blockedList);
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
        {
          status === STATUS_TYPE.success
          ?movieListData.map(movie => 
            <MovieCard
              key={movie.id}
              title={movie.title}
              movieId={parseInt(movie.id)}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              voteCount={movie.vote_count}
              score={movie.vote_average}
              description={movie.overview}
              like={!!likeList[movie.id]}
              block={!!blockList[movie.id]}
              imgClickHandler={()=>setShowDetail({show:true, movieID: movie.id})}
            />)
          :'Loading'
        }
      </div>
    </div>
  )
}

export default MovieList;