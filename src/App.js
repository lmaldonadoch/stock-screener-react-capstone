import React from 'react';
import Nav from './components/Nav';
import Catalog from './pages/Catalog';
import Details from './pages/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
