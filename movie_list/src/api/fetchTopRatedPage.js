import axios from 'axios';

const fetchTopRatedPage = (page_number) => {
  const page = page_number? page_number: 1;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=f7bd9e6e45101cbebc7b8e7446e76ea7&page=${page}`;
  return axios.get(url);
}

export default fetchTopRatedPage;