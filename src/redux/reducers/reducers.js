import {
    FETCH_MOVIES_SUCCESS,
    ADD_MOVIE_TO_FAVORITES,
    REMOVE_MOVIE_FROM_FAVORITES,
  } from '../../actions/actions';
  
  const moviesReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_MOVIES_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };
  
  const favoritesReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_MOVIE_TO_FAVORITES:
        const movieToAdd = action.payload;
        if (!state.find((movie) => movie.id === movieToAdd.id)) {
          return [...state, movieToAdd];
        }
        return state;
      case REMOVE_MOVIE_FROM_FAVORITES:
        const movieIdToRemove = action.payload;
        return state.filter((movie) => movie.id !== movieIdToRemove);
      default:
        return state;
    }
  };
  
  export default { moviesReducer, favoritesReducer };
  