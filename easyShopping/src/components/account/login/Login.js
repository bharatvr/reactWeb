/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
import LoginForm from './LoginComponent';
import LoginBox from './LoginBox';
import Home from './../../home/Home';
import LoginContainer from './LoginComponent';
import { browserHistory } from 'react-router';

class Login extends React.Component {
    constructor( props ) {
        super( props )

    }
    

    
    render() {

        
        const userStatus = this.props.message;
        
        let outPut;
        
        if ( userStatus == 'Welcome!' ) {
             outPut= <LoginBox message='Enter your login details' />
            
        }
        
        else {
            outPut= <Home message={userStatus} /> // Not working
                //outPut= <LoginBox message={userStatus} /> // working 
        //browserHistory.push({pathname: '/register', state: {firstName: "hello, im a passed message!"}});
        }
        
       
            return (

                    <div>
                  
                    {outPut}
                  </div>
               
            )
       
    }
}


export default Login;