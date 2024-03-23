import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Step 1: Create a context to manage authentication state
const AuthContext = createContext();

// Step 2: AuthProvider component to wrap your application and provide authentication context
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null); // Retrieve token from localStorage
  const logoutTimeoutRef = useRef(null);

  // Logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    clearTimeout(logoutTimeoutRef.current);
  };

  // Login function
  const login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const userToken = await result.user.getIdToken();
      setToken(userToken);
      localStorage.setItem('token', userToken);
      // Set a timer for auto logout after 5 minutes
      logoutTimeoutRef.current = setTimeout(logout, 5 * 60 * 1000); // 5 minutes in milliseconds
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  useEffect(() => {
    if (token) {
      // Set a timer for auto logout after 5 minutes
      logoutTimeoutRef.current = setTimeout(logout, 5 * 60 * 1000); // 5 minutes in milliseconds
    }
    return () => clearTimeout(logoutTimeoutRef.current);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
const useAuth = () => useContext(AuthContext);

// Login component
const Login = () => {
  const { token, login } = useAuth();
  const [loggedIn, setLoggedIn] = useState(!!token); // Check if already logged in

  const handleLogin = async () => {
    await login();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Redirect to="/products" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
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

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
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
          <Route path="/products">
            {token ? <Products /> : <Redirect to="/login" />}
          </Route>
          <Route path="/" exact>
            <Home />
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
