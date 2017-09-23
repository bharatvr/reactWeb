/**
 * Created by bsingh on 12/13/2016.
 */
import React, { PropTypes } from 'react';

const HelloComponent = ({userName}) => {

    return (
            <html>
            <head>
                <title>Sign In</title>              
            </head>
            <div className="_loginBox">
                <fieldset>
                    <legend><h1>{userName}</h1></legend>
                    <div className="_loginForm">
                        test div
                    </div>
                </fieldset>
            </div>
        </html>
    )
}



export default HelloComponent