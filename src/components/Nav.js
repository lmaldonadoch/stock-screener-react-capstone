import React from 'react';
import { Link } from 'react-router-dom';
import StocksForm from '../containers/StocksForm';

function Nav() {
  return (
    <nav>
      <ul>
        <div className="logo" />
        <Link to="/">
          <li id="home">Market Overview</li>
        </Link>
        <Link to="/details">
          <li id="details">Stock Details</li>
        </Link>
        <li>
          <div className="form-container-nav">
            <StocksForm />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
