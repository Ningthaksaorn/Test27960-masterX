import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Logout extends Component{
  render() {
      return ReactDOM.render(<App />, document.getElementById('root'));


  }
}

export default Logout;
