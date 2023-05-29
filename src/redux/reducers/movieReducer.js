import {
  ADD_MOVIE_TO_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES,
  SET_MOVIES,
} from '../actions/types';

const initialState = {
  movies: [],
  favorites: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
