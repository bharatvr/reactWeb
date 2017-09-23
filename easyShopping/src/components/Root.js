import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './layout/Layout';
import Login from './../containers/LoginContainer';
import HelloWorldContainer from './../containers/HelloWorldContainer'

const Root = ( { store } ) => (
    
    <Provider store= { store } >
        <Router history={browserHistory}>
            <Route path="/layout" component={Layout}>
                <Route path="/" component={Login} />
                <Route path="/account" component={Login} />
                <Route path="/userInfo" component={HelloWorldContainer} />
            </Route>
        </Router>
    </Provider >
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;