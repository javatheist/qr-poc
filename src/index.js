import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

// here we can import our global stylesheet
import './index.css';

// this is where we could import interceptors such as jwt or error handlers
import { history } from './components/_helpers';

import { App } from './App';

// now we could setup a fake backend for testing purposes
// import { fakeBackend } from './_helpers';
// fakeBackend();

// enable interceptors for http requests
// jwtInterceptor();
// errorInterceptor();


// wrap renderer in case we would like to trigger it after some async action
// function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
// }
