import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Catalog</li>
        </Link>
        <Link to="/details">
          <li>Details</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
