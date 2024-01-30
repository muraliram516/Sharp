import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
