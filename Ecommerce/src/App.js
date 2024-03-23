import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import Login from './Login';
import Logout from './Logout';
import Products from './Products';

const Home = () => <h1>Home</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

const AppWithAuthProvider = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuthProvider;
