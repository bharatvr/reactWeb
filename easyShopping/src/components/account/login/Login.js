/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
import LoginForm from './LoginComponent';

const Login = ( { userName } ) => {


    return (
        <html>
            <head>
                <title>Sign In</title>              
            </head>
            <div className="_loginBox">
                <fieldset>
                    <legend><h1>{userName}</h1></legend>
                    <div className="_loginForm">
                        <LoginForm />
                    </div>
                </fieldset>
            </div>
        </html>
    )
}



export default Login;