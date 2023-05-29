import axios from 'axios';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const ADD_MOVIE_TO_FAVORITES = 'ADD_MOVIE_TO_FAVORITES';
export const REMOVE_MOVIE_FROM_FAVORITES = 'REMOVE_MOVIE_FROM_FAVORITES';

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const addMovieToFavorites = (movie) => ({
  type: ADD_MOVIE_TO_FAVORITES,
  payload: movie,
});

export const removeMovieFromFavorites = (movieId) => ({
  type: REMOVE_MOVIE_FROM_FAVORITES,
  payload: movieId,
});

export const fetchMovies = () => {
  return (dispatch) => {
    axios.get('https://www.omdbapi.com/?s=action&apikey=89c86a79&page=1')
      .then((response) => {
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
