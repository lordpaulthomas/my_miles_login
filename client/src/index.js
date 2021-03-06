import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SignUp from './containers/auth/SignUp/SignUp';
import SignIn from './containers/auth/SignIn';
import SignOut from './containers/auth/SignOut';

import LandingPage from './containers/LandingPage';
import ProfileHome from './containers/ProfileHome';


import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers,
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signout' component={SignOut}/>           
                    <Route exact path='/profile' component={ProfileHome}/>
                    <Route component={LandingPage} />
                </Switch>
            </App>
        </Router>
    </Provider>
    ,document.getElementById('root'));