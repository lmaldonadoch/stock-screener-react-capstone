import React from 'react';
import { Link } from 'react-router-dom';
import StocksForm from '../containers/StocksForm';

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Catalog</li>
        </Link>
        <Link to="/details">
          <li>Details</li>
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
