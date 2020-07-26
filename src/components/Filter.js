import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../actions/filterActions';

function Filter() {
  const filters = [
    'Reset filters',
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

  return (
    <div className="Filter">
      <select name="filters" onChange={filterByCategory} className="filter">
        <option default value>
          {' '}
          Filter by Exchange{' '}
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
