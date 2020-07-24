import React from 'react';
import StocksList from '../containers/StocksList';

function Catalog() {
  return (
    <div className="Catalog">
      <header className="Catalog-header">
        <p>Catalog</p>
        <StocksList size={4} />
      </header>
    </div>
  );
}

export default Catalog;
