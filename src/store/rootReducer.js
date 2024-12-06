import { combineReducers } from 'redux';
import productInfo from './productInfo/reducer';
//import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  pagedata: productInfo,
});

export default rootReducer;