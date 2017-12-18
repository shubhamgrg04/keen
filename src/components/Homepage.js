import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogInUpDialog from './LogInUpDialog.js';
import logo from '../logo.png';

class Homepage extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="header" >
                    <div className="row" >
                        <div className="col-md-1" > </div>
                        <div className="col-md-5" >
                            <img id="logo" src={logo} alt="keen" />
                        </div>
                    </div>
                </div>

                <div className="row main" >
                    <div className="col-md-1" ></div>
                    <div className="col-md-5 place-center" >
                        <span style={{display: 'inline-block', verticalAlign: 'middle'}}>
                            <p className="head" >Track & Tune<br />Your Portfolio</p>
                            <p className="subhead" >Find the best stocks, create your diversified portfolio and test you strategy performance </p>
                        </span>
                    </div>
                    <div className="col-md-1" ></div>
                    <div className="col-md-4 place-center" >
                        <LogInUpDialog />
                    </div>
                    <div className="col-md-1" ></div>
                </div>
            </div>
        );
    }
}

function bindStateToProps(state){
    
}

export default connect(bindStateToProps)(Homepage);