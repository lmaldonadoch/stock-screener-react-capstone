import { combineReducers } from 'redux';
import searchedStockReducer from './SearchedStock';
import mountedStocksReducer from './MountedStocks';
import filterReducer from './FilterReducer';

const rootReducer = combineReducers({
  searchedStock: searchedStockReducer,
  mountedStocks: mountedStocksReducer,
  filter: filterReducer,
});

export default rootReducer;
