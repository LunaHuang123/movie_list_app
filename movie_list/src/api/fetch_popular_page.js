import axios from 'axios';

const fetchPopularPage = (pageNum = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=f7bd9e6e45101cbebc7b8e7446e76ea7&page=${pageNum}`;
    return axios.get(url);
}

export default fetchPopularPage;