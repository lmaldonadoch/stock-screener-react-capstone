import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Stock({ stock }) {
  let source = '';
  if (
    [
      'NYSE Arca',
      'NYSE American',
      'NYSE',
      'New York Stock Exchange',
      'NYSEArca',
    ].includes(stock.exchange)
  ) {
    source = 'interesting-stocks';
  } else if (
    [
      'Nasdaq Global Select',
      'NASDAQ Global Market',
      'NASDAQ Capital Market',
      'Nasdaq',
      'NasdaqGM',
      'NasdaqCM',
      'NasdaqGS',
    ].includes(stock.exchange)
  ) {
    source = 'most-gainer';
  } else if (
    ['Paris', 'Amsterdam', 'Brussels', 'Lisbon', 'Toronto', 'Swiss'].includes(
      stock.exchange,
    )
  ) {
    source = 'most-loser';
  } else {
    source = 'most-active';
  }
  return (
    <div className={`info-box ${source}-box`} id={stock.symbol}>
      <Link to={`/details/${stock.symbol}`}>
        <p className="info-box-company" id={stock.symbol}>
          {stock.name}
        </p>
        <p className="info-box-ticker" id={stock.symbol}>
          {stock.symbol}
        </p>
        <div className="info-box-price-container" id={stock.symbol}>
          <span className="info-box-price" id={stock.symbol}>
            $
            {stock.price}
          </span>
        </div>
      </Link>
    </div>
  );
}

Stock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stock: PropTypes.object.isRequired,
};

export default Stock;
