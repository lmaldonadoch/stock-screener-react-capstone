import { combineReducers } from 'redux';
import searchedStockReducer from './SearchedStock';
import mountedStocksReducer from './MountedStocks';
import filterReducer from './FilterReducer';
import stocksToDisplayReducer from './StocksToDisplayReducer';

const rootReducer = combineReducers({
  searchedStock: searchedStockReducer,
  mountedStocks: mountedStocksReducer,
  filter: filterReducer,
  stocksToDisplay: stocksToDisplayReducer,
});

export default rootReducer;
