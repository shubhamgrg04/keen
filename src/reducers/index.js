import {combineReducers} from 'redux';
import PortfolioReducer from './reducer-portfolio.js';
import AllStocksReducer from './reducer-allStocks';
import {reducer as formReducer} from 'redux-form';
import userReducer from './reducer-user.js';

const allReducers = combineReducers({
    portfolio: PortfolioReducer,
    allStocks: AllStocksReducer,
    form: formReducer,
    user: userReducer
});

export default allReducers;