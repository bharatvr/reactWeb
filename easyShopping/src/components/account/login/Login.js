/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
import LoginForm from './LoginComponent';
import LoginBox from './LoginBox';
import Home from './../../home/Home';

class Login extends React.Component {
    constructor( props ) {
        super( props )

    }

    render() {

        const userStatus = this.props.message;

       /*1 if ( userStatus == 'Sign in' ) {*/
            return (

                <LoginBox message={this.props.message} />
            )
        /*}

        else {


            return (

                <Home message={this.props.message} />
            )
        }*/
    }
}


export default Login;