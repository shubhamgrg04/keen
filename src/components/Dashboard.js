import React from 'react';
import Portfolio from './Portfolio';
import StockTable from './StockTable';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="row">
                <StockTable />
                <Portfolio />
            </div>
        );
    }
}