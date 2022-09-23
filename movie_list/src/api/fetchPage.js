import axios from 'axios';

const fetchPage = (page_number) => {
  const page = page_number? page_number: 1;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_NOT_SAFE_API_KEY}&page=${page}`;
  return axios.get(url);
}

export default fetchPage;