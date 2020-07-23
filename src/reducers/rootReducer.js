import { combineReducers } from 'redux';
import searchedStockReducer from './SearchedStock';

const rootReducer = combineReducers({
  searchedStock: searchedStockReducer,
});

export default rootReducer;
