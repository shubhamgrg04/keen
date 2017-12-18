import {GET_STOCKS_START} from '../actions/stocks.js';
import {GET_STOCKS_FINISH} from '../actions/stocks.js';
export default function(state = null, action){
    switch(action.type) {
        case GET_STOCKS_START:
            return {isFirstLoad: false, isFetching: true};
            break;
        case GET_STOCKS_FINISH:
            return {isFirstLoad: false, isFetching: false, data: action.portfolio};
            break;
        default:
            return state;
    }
};