import React from 'react';
import { useSelector } from 'react-redux';

function Stock() {
  const state = useSelector((state) => state.mountedStocks);
  console.log(state);
  return <div></div>;
}

export default Stock;
