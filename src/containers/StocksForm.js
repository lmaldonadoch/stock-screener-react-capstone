import React from 'react';

function StocksForm({ clickHandler }) {
  var stock = '';

  const passStock = (e) => {
    e.preventDefault();
    clickHandler(stock);
  };

  return (
    <div className="Details">
      <form className="books-form" onSubmit={passStock}>
        <input
          type="text"
          placeholder="Book Title"
          className="title-input"
          name="title"
          onChange={(e) => (stock = e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default StocksForm;
