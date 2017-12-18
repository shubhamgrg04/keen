import {timeParse as d3TimeParse} from 'd3-time-format';
import firebaseApp from '../firebase-config';
import firestore from 'firebase/firestore';

export const GET_STOCKS_START = 'GET_STOCKS_START';
export const GET_STOCKS_FINISH = 'GET_STOCKS_FINISH';

export default function getStocksData(user){
    var db = firebaseApp.firestore();
    var tickers = [];
    var stock_data = [];
    var portfolio = {prices: []};
    let fetchData = function() {
        return new Promise( function(resolve, reject) {
        console.log('GET DATA CALLED!!');
            console.log(tickers);
            let prms = fetch("https://www.quandl.com/api/v3/datasets/NSE/" + tickers[0].ticker + ".json?api_key=-2Ax__TpH8cizCzTXAsV&start_date=2016-11-10");
            
            for(let index=1; index<=tickers.length; index++){
                prms = prms
                        .then((response) => response.json())
                        .then(results => {
                            results.quantity = tickers[index-1].quantity;
                            appendStockData(results);
                            if(index==tickers.length)
                                resolve(stock_data);
                            else 
                                return fetch("https://www.quandl.com/api/v3/datasets/NSE/" + tickers[index].ticker + ".json?api_key=-2Ax__TpH8cizCzTXAsV&start_date=2016-11-10");
                        });
            }
        });
    }

    function appendStockData(data){
        let daily_data = {};
        daily_data.prices = [];
        daily_data.ticker_name = data.dataset.dataset_code;
        daily_data.ticker_long_name = data.dataset.name;
        daily_data.ticker_quantity = data.quantity;
        data.dataset.data.forEach(function(d) {
            let x = {};
            x.date = d[0];
            x.price = d[5];
            daily_data.prices.push(x);
        });
        stock_data.push(daily_data);
    }

    function calculatePortfolio(data){
        for(let day=0; day<data[0].prices.length; day++){
            portfolio.prices[day] = {"date": data[0].prices[day].date, "price": data[0].prices[day].price * tickers[0].quantity};
            for(let stock = 1; stock<tickers.length; stock++){
                if(day>=data[stock].prices.length)
                    continue;
                portfolio.prices[day].price += data[stock].prices[day].price * tickers[stock].quantity;
            }
        }
    }

    return (dispatch) => {
        dispatch({
            type: GET_STOCKS_START
        });
        db.collection("portfolios").doc(user.uid).get()
        .then((data) => {
            console.log(data.data().stocks);
            tickers = data.data().stocks;
            console.log("AB LAG GAYA!!");
            fetchData()
            .then((stock_data) => {
                console.log("FETCH DATA COMPLETED!!!");
                console.log(stock_data);
                calculatePortfolio(stock_data);
                dispatch({
                    type: GET_STOCKS_FINISH,
                    portfolio: portfolio.prices,
                    allStocks: stock_data
                });
            });
        });
    }
};