import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../actions/filterActions';

function Filter() {
  const filters = [
    'Reset filters',
    'NYSE',
    'NASDAQ',
    'Foreign Exchanges',
    'Other',
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
