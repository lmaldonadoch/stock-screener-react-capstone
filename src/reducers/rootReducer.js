import { combineReducers } from 'redux';
import searchedStockReducer from './SearchedStock';
import mountedStocksReducer from './MountedStocks';

const rootReducer = combineReducers({
  searchedStock: searchedStockReducer,
  mountedStocks: mountedStocksReducer,
});

export default rootReducer;
