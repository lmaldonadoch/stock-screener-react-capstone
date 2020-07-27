import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Catalog from './pages/Catalog';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/details" exact component={Details} />
          <Route path="/details/:stock" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
