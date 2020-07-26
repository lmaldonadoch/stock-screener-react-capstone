import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../actions/filterActions';

function Filter() {
  const filters = [
    'NYSE Arca',
    'Nasdaq Global Select',
    'New York Stock Exchange',
    'NASDAQ Global Market',
    'NASDAQ Capital Market',
    'BATS Exchange',
    'NYSE American',
    'Nasdaq',
    'NYSE',
    'NasdaqGM',
    'NasdaqCM',
    'NasdaqGS',
    'Other OTC',
    'YHD',
    'Paris',
    'Amsterdam',
    'Brussels',
    'Lisbon',
    'Toronto',
    'NYSEArca',
    'BATS',
    'Swiss',
    'MCX',
  ];
  const dispatch = useDispatch();

  const filterByCategory = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  function filterByChar(value) {
    dispatch(changeFilter(value));
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
