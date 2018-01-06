import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './layout/Layout';
import Login from './../components/account/login/Login'
import HelloWorldContainer from './../containers/HelloWorldContainer'
import Home from './../components/home/Home'

const Root = ( { store } ) => (
    
    <Provider store= { store } >
        <Router history={browserHistory}>
            <Route path="/layout" component={Layout}>
                <Route path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={HelloWorldContainer} />
            </Route>
        </Router>
    </Provider >
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;