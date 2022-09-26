import axios from 'axios';

const fetchPopularPage = (pageNum = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NOT_SAFE_API_KEY}&page=${pageNum}`;
    return axios.get(url);
}

export default fetchPopularPage;