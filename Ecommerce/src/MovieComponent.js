import React, { useState, useEffect } from 'react';

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', openingText: '', releaseDate: '' });

  const fetchData = async () => {
    try {
      const response = await fetch('https://crudcrud.com/api/f7da40356c6d48db83ba826551089bf4/unicorns');
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postData = async (newData) => {
    try {
      const response = await fetch('https://crudcrud.com/api/f7da40356c6d48db83ba826551089bf4/unicorns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, data]);
    } catch (error) {
      console.error("Could not post data: ", error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`https://crudcrud.com/api/f7da40356c6d48db83ba826551089bf4/unicorns/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Could not delete the movie: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postData(newMovie);
    setNewMovie({ title: '', openingText: '', releaseDate: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <textarea
          name="openingText"
          value={newMovie.openingText}
          onChange={handleInputChange}
          placeholder="Opening Text"
        />
        <input
          type="text"
          name="releaseDate"
          value={newMovie.releaseDate}
          onChange={handleInputChange}
          placeholder="Release Date"
        />
        <button type="submit">Add Movie</button>
      </form>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p>{movie.opening_crawl}</p>
          <p>{movie.release_date}</p>
          <button onClick={() => deleteMovie(movie.episode_id)}>Delete Movie</button> {/* Replace episode_id with your movie id property */}
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
