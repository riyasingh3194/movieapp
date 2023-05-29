import React from 'react';
import { connect } from 'react-redux';
import { removeMovieFromFavorites } from '../redux/actions/movieActions';

const FavoritesPage = ({ favorites, removeMovieFromFavorites }) => {
  const handleRemoveFromFavorites = (movieId) => {
    removeMovieFromFavorites(movieId);
  };

  return (
    <div>
      <h1>Favorites Page</h1>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => handleRemoveFromFavorites(movie.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.movieReducer.favorites,
});

export default connect(mapStateToProps, { removeMovieFromFavorites })(FavoritesPage);
