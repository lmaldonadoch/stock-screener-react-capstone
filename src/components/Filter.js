import React from 'react';

function Filter() {
  const filters = ['All', 'NYSE', 'NASDAQ', 'AMEX'];

  const filterByCategory = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  function filterByChar(e) {
    console.log(e);
  }

  return (
    <div className="Filter">
      <button
        className="filter-button"
        value="Active"
        onClick={(e) => filterByChar(e.target.value)}
      >
        Most Active{' '}
      </button>
      <button
        className="filter-button"
        value="Gainers"
        onClick={(e) => filterByChar(e.target.value)}
      >
        Biggest Gainers{' '}
      </button>
      <button
        className="filter-button"
        value="Losers"
        onClick={(e) => filterByChar(e.target.value)}
      >
        Biggest Losers{' '}
      </button>
      <select name="filters" onChange={filterByCategory} className="filter">
        <option default value>
          {' '}
          FILTER BY EXCHANGE{' '}
        </option>
        {filters.map((filter) => (
          <option value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
