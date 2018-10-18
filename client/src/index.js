import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute , browserHistory} from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import reducers from './reducers';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store=createStoreWithMiddleware(reducers);

if(localStorage.getItem('token')){
  store.dispatch({type:AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='signin' component={SignIn}/>
      <Route path='signout' component={SignOut}/>
      <Route path='signup' component={SignUp}/>
      <Route path='feature' component={RequireAuth(Feature)}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
