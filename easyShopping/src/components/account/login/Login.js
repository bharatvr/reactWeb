/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
import LoginForm from './LoginComponent';
import LoginBox from './LoginBox';
import Home from './../../home/Home';
import LoginContainer from './LoginComponent';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import * as actions from '../../../actions/helloWorldAction'


class Login extends React.Component {
        constructor( props ) {
        super( props )

    }
  
    render() {


        const userStatus = this.props.stateInfo.message;

        console.log( "login message " + userStatus )

        let outPut;
        let pageTitle;

        if ( userStatus && userStatus === 'Please enter login Id and password!' ) {
            outPut = <LoginBox message={userStatus} />
            pageTitle = "Login Page"
        }

        else {
            outPut = <Home message={userStatus} />
            pageTitle = "User Home Page"
        }


        return (
            <html>
                <head>
                    <title>{pageTitle}</title>
                </head>
                {outPut}
            </html>
        )

    }
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        stateInfo: state.loginUserReducer

    }
}


export default connect( mapStateToProps )( Login );