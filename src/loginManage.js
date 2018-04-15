import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, formInstance, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import m8 from "./components/image/8.jpg";
import m14 from "./components/image/14.jpg";
import m15 from "./components/image/15.jpeg";
import './login.css';
import axios from 'axios';
import Footers from "./components/Footers";
import Navbars from "./Navbars";
import Login from './login';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { promise } from 'react-promise';

const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:20

    }


};
class loginManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      status: ""
    }
  }
  setdata() {
    var status = this.props.check.resultCheck;
    this.setState({
      status:status
    });
  }
  componentDidMount () {
    // setTimeout(()=>{
    //   this.setdata()
    // },1000);
  }
  handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      axios.get('http://localhost/thesisconDB/getUser.php', {
        params: {
          email : this.state.email,
          pass : this.state.pass
        }
      })
        .then(res => {
          this.setState({status: res.data[0].mem_status})
          console.log(res);
        })
        .catch(err => { throw err; });
    },1000)
  }
  onChangeEm(e) {
    this.setState({email: e.target.value});
  }
  onChangePw(e) {
    this.setState({pass: e.target.value});
  }
  signUp(){
    setTimeout(() => {
      if(this.state.status === "0"){
        alert("อีเมล์หรือรหัสผ่านไม่ถูกต้อง");
      }else {
        alert("รหัสผ่านถูกต้อง");
        return ReactDOM.render(<Navbars />,document.getElementById('root'));
        //this.props.setData(this.state.status);
        //window.location = '/Login?status='+this.state.status;
      }
    },2000);
  }

  render() {
    return (
      <div className="login" style={styles.font} >
      <h1>Welcome</h1>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formHorizontalEmail">
              <Col xs={6} md={4}></Col>
                <Col sm={4}>
                  <FormControl type="email" placeholder="Email" o2nChange={this.onChangeEm.bind(this)} />
                </Col>
              </FormGroup>
              <FormGroup style={styles.font} controlId="formHorizontalPassword">
              <Col xs={6} md={4}></Col>
                <Col sm={4}>
                  <FormControl type="pass" placeholder="Password" onChange={this.onChangePw.bind(this)} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={8}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
              <FormGroup>
              <Col componentClass={ControlLabel} xs={6} md={4}>
              </Col>
              <Col sm={4}>
                  <button  className="button" onClick={() => this.signUp()}>
                    Sign in
                  </button>
                </Col>
              </FormGroup>
            </Form>
      </div>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   return{
//     user: state.user,
//     check: state.check,
//     realtimedata: state.fetch
//   };
// };
// const mapDispatchToprops = (dispatch) => {
//   return{
//       setData : () =>{
//         dispatch({
//           type: "FETCH_CHECKUSER",
//           payload : new Promise((resolve,reject) => {
//             setTimeout(() => {
//               // resolve(this.state.status)
//               // console.log(resolve);
//             },500);
//           })
//         })
//       }
//   };
// };
//
// export default withRouter(connect(mapStateToProps, mapDispatchToprops)(loginManage));

export default loginManage;
