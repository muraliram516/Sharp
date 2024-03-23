import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

// Step 1: Create a context to manage authentication state
const AuthContext = createContext();

// Step 2: AuthProvider component to wrap your application and provide authentication context
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
const useAuth = () => useContext(AuthContext);

// Login component
const Login = () => {
  const { token } = useAuth();
  const [loggedIn, setLoggedIn] = useState(!!token); // Check if already logged in

  const handleLogin = () => {
    // Simulated login process, here you would typically make an API call to authenticate the user
    const token = 'your_generated_token';
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Logout component
const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// Your App component
function App() {
  const { token } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesHandler();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  async function fetchMoviesHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {token ? (
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact>
            {token ? (
              <div>
                <h1>Star Wars Movies</h1>
                <ul>
                  {movies.map((movie) => (
                    <li key={movie.id}>
                      <h2>{movie.title}</h2>
                      <p>{movie.openingText}</p>
                      <p>Release Date: {movie.releaseDate}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
