import React from 'react';
import { Link } from 'react-router-dom';

function Stock({ stock, color, source }) {
  return (
    <div className={`info-box ${source}-box`} id={stock.ticker}>
      <Link to={`/details/${stock.ticker}`}>
        <p className="info-box-company" id={stock.ticker}>
          {stock.companyName}
        </p>
        <p className="info-box-ticker" id={stock.ticker}>
          {stock.ticker}
        </p>
        <div className="info-box-price-container" id={stock.ticker}>
          <span className={`info-box-price ${color}`} id={stock.ticker}>
            ${stock.price}
          </span>
          <span className={`info-box-change ${color}`} id={stock.ticker}>
            {stock.changesPercentage}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Stock;
