import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  logger  from 'redux-logger';
import axios from 'axios';
import rootReducer from './reducers';
const history = createHistory();
const middleware = routerMiddleware(history);
const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ",action);
  next(action);
}
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      middleware,
      thunk,
      promiseMiddleware()
    )
  )
)
store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch(
  {
    type: "FETCH_REAL",
    payload :new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve(axios.get('http://localhost/thesisconDB/getUser.php')
          .then(res => {
            //console.log(res.data);
            return res.data })
          .catch(err => { throw err; }));
      },1000);
    })
  }
)
ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history} >
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
