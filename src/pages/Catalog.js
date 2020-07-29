import React from 'react';
import StocksList from '../containers/StocksList';
import Filter from '../components/Filter';

function Catalog() {
  return (
    <div className="Catalog">
      <header className="Catalog-header">
        <div className="logo-big" />
        <Filter />
        <h1>Market Overview</h1>
        <StocksList />
      </header>
    </div>
  );
}

export default Catalog;
