import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage.js';
import Dashboard from './Dashboard.js';
import {connect} from 'react-redux';

class MainApp extends React.Component {
    render() {
        if(!this.props.user.isLoggedIn){
            return (<Homepage />);
        }
        else {
            return (
                <BrowserRouter>
                    <div className="container-fluid parent-container">
                        <div className="row">
                            <div className="col-md-2 navigation">
                                Hi {this.props.user.user.email}
                                <div><Link to="/portfolio">Portfolio</Link></div>
                                <div><Link to="/sentiments">Sentiments</Link></div>
                                <div><Link to="/charts">Charts</Link></div>
                            </div>
                            <div className="col-md-10">
                                <Route path="/" component={Dashboard} />
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
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