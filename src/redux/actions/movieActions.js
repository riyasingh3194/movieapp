import axios from 'axios';
import {
  ADD_MOVIE_TO_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES,
  SET_MOVIES,
} from './types';

export const addMovieToFavorites = (movie) => ({
  type: ADD_MOVIE_TO_FAVORITES,
  payload: movie,
});

export const removeMovieFromFavorites = (movieId) => ({
  type: REMOVE_MOVIE_FROM_FAVORITES,
  payload: movieId,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://www.omdbapi.com/?s=action&apikey=89c86a79&page=1'
      );
      const movieData = response.data.Search;
      const movies = movieData.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
      }));
      dispatch(setMovies(movies));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};
