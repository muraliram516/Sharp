import React, { useState, useEffect, useCallback } from 'react';

const fetchMovies = async () => {
  const response = await fetch('https://your-api-endpoint/movies');
  const data = await response.json();
  return data;
};

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = useCallback(async () => {
    try {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
