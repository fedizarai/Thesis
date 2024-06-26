/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './loginpage'
import RegistrationPage from './RegistrationPage'
import ForgotPassword from './forgotpassword'
import OTP from './otp'
import LockScreen from './lockscreen'

//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import chatlayout from './Sidebar/chatlayout';

import uicomponents from '../MainPage/UIinterface/components';
//Error Page
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';



export default class App extends Component {
    
    componentDidMount() {
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
            || location.pathname.includes("otp") || location.pathname.includes("lockscreen")) {
            // $('body').addClass('account-page');
        } else if (location.pathname.includes("error-404") || location.pathname.includes("error-500")) {
            $('body').addClass('error-page');
        }
    }
    render() {
        const { location } = this.props;



        if (location.pathname === '/') {
            return (<Redirect to={'/login'} />);
        }

        
        return (
            <Switch>

                <Route path="/login" component={LoginPage} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/register" component={RegistrationPage} />
                <Route path="/otp" component={OTP} />
                <Route path="/lockscreen" component={LockScreen} />
                <Route path="/app" component={DefaultLayout} />
                <Route path="/conversation" component={chatlayout} />
                <Route path="/ui-components" component={uicomponents} />
                <Route path="/error-404" component={Error404} />
                <Route path="/error-500" component={Error500} />
            </Switch>
        )
    }

}
