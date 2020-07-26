import React from 'react';
import StocksList from '../containers/StocksList';
import Filter from '../components/Filter';

function Catalog() {
  return (
    <div className="Catalog">
      <header className="Catalog-header">
        <h1>Pro Market Analyst</h1>
        <Filter />
        <StocksList />
      </header>
    </div>
  );
}

export default Catalog;
