import React, {Component} from 'react';
import { LineChart, Line } from 'recharts';
import {connect} from 'react-redux';

class StockRow extends Component{
    render(){
        let stockdata = this.props.stockdata;
        let change = (stockdata.prices[0].price - stockdata.prices[1].price).toFixed(2);
        let percentChange = (100 * change / stockdata.prices[1].price).toFixed(2);
        let latestPrice = (stockdata.prices[0].price).toFixed(2);
        return (
            <div className="stock-row row">
                <div className="col-md-5">
                    <p className="ticker-name"> {stockdata.ticker_name} </p>
                    <p className="ticker-current-price" >{latestPrice} </p>
                    <p className="ticker-rate-change" 
                        style= { {color : ((change>0)?'#21ce99':'#ff4d2d')} }>
                            {((percentChange>0)?'+':'') + percentChange + '% (₹ ' + change + ')' }</p>
                    <p className="ticker-quantity"> {stockdata.ticker_quantity} Shares</p>
                </div>
                <div className="col-md-6">
                        <LineChart 
                            width={250}
                            height={100}
                            data={stockdata.prices}>

                            <Line type="linear" dataKey="price" stroke={((change>0)?'#21ce99':'#ff4d2d')} dot={false} />

                        </LineChart>
                </div>
                <div className="col-md-1" />
            </div>
        );
    }
}

export default StockRow;