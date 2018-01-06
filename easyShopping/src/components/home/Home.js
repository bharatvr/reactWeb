/**
 * Created by bsingh on 08/08/2017.
 */
import React from 'react';
 class Home extends React.Component { 
     constructor(props) {
         super(props)
         
       }
       
      render() {   
       return (
       
            <div className="_loginBox">
                After Login: {this.props.message}
            </div>
    )
     }
    }


export default Home;