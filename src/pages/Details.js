import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { requestStockInfo } from '../actions/searchedStockActions';
import StocksForm from '../containers/StocksForm';
import moment from 'moment';

function Details() {
  const state = useSelector((state) => state.searchedStock);

  return (
    <div className="Details">
      <StocksForm />
      {state.isFetching && <p>Please wait...</p>}
      <Line data={state.data} />
      <div>
        <div>Company Name: {state.stockInfo.name}</div>
        <div>Change ($): ${state.stockInfo.change}</div>
        <div>Change (%): {state.stockInfo.changesPercentage}%</div>
        <div>Previous Day High: {state.stockInfo.dayHigh}</div>
        <div>Previous Day Low: {state.stockInfo.dayLow}</div>
        <div>Previous Day Close: {state.stockInfo.previousClose}</div>
        <div>Previous Day Volume: {state.stockInfo.volume}</div>
        <div>Year High: {state.stockInfo.yearHigh}</div>
        <div>Year Low: {state.stockInfo.yearLow}</div>
        <div>
          Next Earnings:{' '}
          {moment(state.stockInfo.earningsAnnouncement).format('LLL')}
        </div>
        <div>EPS: {state.stockInfo.eps}</div>
        <div>PE: {state.stockInfo.pe}</div>
      </div>
    </div>
  );
}

export default Details;
