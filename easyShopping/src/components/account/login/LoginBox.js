/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
import LoginForm from './LoginComponent';

 class LoginBox extends React.Component { 
         constructor(props) {
         super(props)
        
       }
       
      render() {           
       
       return (
        <html>
            <head>
                <title>Sign In</title>              
            </head>
            <div className="_loginBox">
                <fieldset>
                    <legend><h1>Sign In</h1></legend>
                    <div >{this.props.message}
                </div>
                    <div className="_loginForm">
                        <LoginForm />
                    </div>
                </fieldset>
            </div>
        </html>
     )
     }
    }


export default LoginBox;