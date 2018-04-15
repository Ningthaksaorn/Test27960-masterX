import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import './App.css';
import App from './App';
import Navbars from './Navbars';

import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);



class Login extends Component {

constructor() {
    super();
    this.state = {
        status : "0"
    }
}
setdata() {
  var status = this.props.check.resultCheck;
  this.setState({
    status:status
  });

}
componentDidMount () {
  setTimeout(()=>{
    this.setdata()
  },1000);
}


    render() {
      console.log(this.state);
        let show ;
        if(this.state.status === "1"){
            show = <ConnectedRouter history={history} >
                    <Navbars />
                  </ConnectedRouter> ;
        }else{
            show = <App />;

        }

        return (
            <div>
                {show}
            </div>
    );

    }
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
    check: state.check,
    realtimedata: state.fetch
  };
};
const mapDispatchToprops = (dispatch) => {
  return{
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Login));
