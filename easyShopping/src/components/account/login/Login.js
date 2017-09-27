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

        if ( userStatus == 'Welcome!' ) {
            return (

                <LoginBox message={this.props.message} />
            )
        }

        else {
        alert('Inside else ');
          return (

                <Home message={this.props.message} />
            )
        }
    }
}


export default Login;