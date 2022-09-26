import axios from 'axios';

const fetchMovies = async query => {
  const keyApi = '168c87e340b321f808dc48486f6cc30b';
  const baseUrl = 'https://api.themoviedb.org/3';
  try {
    const response = await axios.get(`${baseUrl}${query}?api_key=${keyApi}`);

    return response.data;
  } catch (error) {
    console.log('Error: ' + error);
  }
};
export default fetchMovies;
