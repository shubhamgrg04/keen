import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage.js';
import Dashboard from './Dashboard.js';
import {connect} from 'react-redux';
import '../css/mainapp.css';

class MainApp extends React.Component {
    render() {
        if(!this.props.user.isLoggedIn){
            return (<Homepage />);
        }
        else {
            return (
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a className="navbar-brand" href="#">Dashboard</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                
                    <BrowserRouter>
                        <div className="container-fluid parent-container">
                            <div className="row">
                                <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item">
                                        <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Reports</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Analytics</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Export</a>
                                        </li>
                                    </ul>

                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Nav item</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Nav item again</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                                <Route path='/' component={Dashboard} />
                            </main>
                        </div>
                    </BrowserRouter>
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(MainApp);