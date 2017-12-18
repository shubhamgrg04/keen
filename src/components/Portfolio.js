import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LineChart, Line } from 'recharts';
import { bindActionCreators } from 'redux';
import getStockData from '../actions/stocks.js';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader';

class Dashboard extends Component{
    render(){
        var portfolio_data = this.props.portfolio.data
        this.ref
        if(this.props.portfolio.isFirstLoad || this.props.portfolio.isFetching){
            return (
                <div className="col-md-8 portfolio">
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
        else {
            return(
                <div className="col-md-8 portfolio">
                    <h3 id="portfolio-value" >₹ {portfolio_data[0].price.toLocaleString('hi-IN')}</h3>
                    <p><b id="portfolio-change"></b>  <b id="portfolio-rate-change"></b>  <span id="portfolio-period">TODAY</span></p>
                    <div id="chart-portfolio">
                        <LineChart width={700} height={350} data={portfolio_data} margin={{top: 5, right: 30, left: 20, bottom: 5}} >
                            <Line type="monotone" dataKey="price" stroke="#000" dot={false} />
                        </LineChart>
                    </div>
                </div>
            );
        }
    }

    componentWillMount() {
        if(this.props.user.isLoggedIn){ 
            this.props.getStockData(this.props.user.user);
        }
    }
}

function mapStateToProps(state){
    return {
        portfolio: state.portfolio,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getStockData: (user) => dispatch(getStockData(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);