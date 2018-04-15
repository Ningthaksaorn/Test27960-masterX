import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, SplitButton, Button} from 'react-bootstrap';
import axios from 'axios';

import m9 from "./image/9.jpg";
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:23
    }
};

class Donate extends Component {
  constructor() {
   super();
   this.state = {
     user: " ",
     loading: true
   };
 }
 componentDidMount() {
   setTimeout(()=>{
     axios.get('http://localhost/thesisconDB/getUser.php')
       .then(res => {
         console.log(res.data);
         this.setState({user: res.data, loading:false}) })
       .catch(err => { throw err; });
   },1000);
 }
  render() {
    console.log(this.state.user);
    return (
      <div style={styles.font} >

                              <h1>บริจาคข้าว</h1>
                              <Grid>
                                <Row>
                                <Col xs={6} md={8}>
                                  <p>ชื่อหน่วยงาน   :</p>
                                      <p><SplitButton title="บริจาคให้กับหน่วยงาน" pullRight id="split-button-pull-right">
                                            <MenuItem eventKey="1">หน่วยงานที่ 1</MenuItem>
                                            <MenuItem eventKey="2">หน่วยงานที่ 2</MenuItem>
                                            <MenuItem eventKey="3">หน่วยงานที่ 3</MenuItem>
                                          </SplitButton></p>
                                  <p>บริจาคจำนวน  :</p>
                                      <p><SplitButton title="จำนวน" pullRight id="split-button-pull-right">
                                            <MenuItem eventKey="1">1 กระสอบ</MenuItem>
                                            <MenuItem eventKey="2">2 กระสอบ</MenuItem>
                                            <MenuItem eventKey="3">3 กระสอบ</MenuItem>
                                          </SplitButton></p>
                                  <Row>
                                  <Col smOffset={2} sm={10}>
                                    <Button type="ยืนยันการบริจาค">
                                    ยืนยันการบริจาค
                                    </Button>
                                  </Col>

                                  </Row>
                                <h2>E-mail: {this.state.user[0].mem__email}</h2>




                                  <br></br>
                                  <br></br>

                                  <Image width={600} height={300} alt="600x300" src={m9} responsive />
                                  </Col>
                                </Row>

                                </Grid>
                                <br></br>
                                <br></br>
      </div>
    );


  }
}

export default Donate;
