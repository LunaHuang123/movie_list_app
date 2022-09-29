import axios from 'axios';

const fetchMovieDetails = (movieID) => {
  const movie = movieID? movieID: 1;
  // const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.REACT_APP_NOT_SAFE_API_KEY}&language=en-US`;
  const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=f7bd9e6e45101cbebc7b8e7446e76ea7&language=en-US`;
  return axios.get(url);
}

export default fetchMovieDetails;