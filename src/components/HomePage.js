import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addMovieToFavorites, fetchMovies } from '../redux/actions/movieActions';

const HomePage = ({ movies, addMovieToFavorites, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleAddToFavorites = (movie) => {
    addMovieToFavorites(movie);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => handleAddToFavorites(movie)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps, { addMovieToFavorites, fetchMovies })(HomePage);
