import React from 'react';
import { reduxForm, Field } from 'redux-form';
import loginUser from '../actions/user';
import {connect} from 'react-redux';

let LoginForm = (props) => {
    const { handleSubmit } = props;
    return(
        <form id="login-form" style={{display: 'block'}} onSubmit={handleSubmit}>
            <Field name="useremail" type="email" component="input" tabIndex="1" className="form-control" placeholder="Email" />

            <Field name="password" type="password" component="input" tabIndex="2" className="form-control" placeholder="Password" />
            
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <input type="submit" type="submit" tabIndex="3" className="form-control btn btn-login" value="Login" />
                </div>
                <div className="col-md-2"></div>
            </div>
        </form>
    ); 
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

let RegisterForm = (props) => {
    const {handleSubmit} = props;
    return(
        <form id="register-form" action="" method="post" role="form" style={{display: 'none'}}>
            <div className="form-group">
                <Field name="username" component="input" tabIndex="1" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value="" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-8">
                        <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </form>
    ); 
}

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

class LogInUpDialog extends React.Component{

    showRegister(){
        console.log("register clicked");
    }

    showLogin(){
        console.log("login clicked");
    }

    constructor(props){
        super(props);
        this.showLogin = this.showLogin.bind(this);
        this.showRegister = this.showRegister.bind(this);
    }

    render(){ 
        return (
            <div style={{width: '100%', maxWidth: '350px'}}>
                <div className="panel-login">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-md-6">
                                <a onClick={this.showLogin} className="active" id="login-form-link">LOGIN</a>
                            </div>
                            <div className="col-md-6">
                                <a  onClick={this.showRegister} id="register-form-link">REGISTER</a>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <LoginForm onSubmit={this.props.loginUser} />

                                <RegisterForm onSubmit={() => {console.log("submit clicked!")}} />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        form: state.form
    };
}

function mapDispatchToProps(dispatch){
    return {
        loginUser: (values) => dispatch(loginUser(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInUpDialog);