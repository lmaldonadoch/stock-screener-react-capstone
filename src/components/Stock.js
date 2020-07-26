import React from 'react';
import { Link } from 'react-router-dom';

function Stock({ stock }) {
  let source = '';
  if (stock.exchange === 'Nasdaq Global Select') {
    source = 'interesting-stocks';
  } else if (stock.exchange === 'New York Stock Exchange') {
    source = 'most-gainer';
  } else if (stock.exchange === 'NYSE Arca') {
    source = 'most-loser';
  } else {
    source = 'most-active';
  }
  return (
    <div className={`info-box ${source}-box`} id={stock.ticker}>
      <Link to={`/details/${stock.symbol}`}>
        <p className="info-box-company" id={stock.ticker}>
          {stock.name}
        </p>
        <p className="info-box-ticker" id={stock.ticker}>
          {stock.symbol}
        </p>
        <div className="info-box-price-container" id={stock.ticker}>
          <span className={`info-box-price`} id={stock.ticker}>
            ${stock.price}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Stock;
