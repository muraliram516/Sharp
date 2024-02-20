import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
const [movies, setMovies] = useState([]);

async function function fetchMoviesHandler(){
const response = awaint fetch('https://swapi.dev/api/films')
const data = await response.json();

.then((data) => {
const transformedMovies = data.results.maps((movieData) => {
return {
id: movieData.episode.title,
openingText: movieData.opening_crawl,
releaseDate: movieData.release_date,
};
});
   setMovies(transformedMovies);  );
}

export default App;
