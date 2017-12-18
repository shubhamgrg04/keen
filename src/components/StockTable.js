import React, {Component} from 'react';
import StockRow from './StockRow.js';
import {connect} from 'react-redux';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader';


class StockTable extends Component{
    
    render(){

        if(this.props.allStocks.isFirstLoad || this.props.allStocks.isFetching){
            return (
                <div className="col-md-4">
                    <OverlayLoader
                        color={'blue'} // default is white
                        loader="ScaleLoader" // check below for more loaders
                        text="Loading Historical Data" 
                        active={true} 
                        backgroundColor={'white'} // default is black
                        opacity=".4" />
                </div>
            );
        }
        else{
            var stockdivs = this.props.allStocks.data.map((stockdata) => 
                (<StockRow 
                    key={stockdata.ticker_name}
                    stockdata={stockdata} />)
            );
            return (
                <div className="col-md-4 stocks" >
                    {stockdivs}
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        allStocks: state.allStocks
    };
}

export default connect(mapStateToProps)(StockTable);