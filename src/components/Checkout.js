import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, Button, responsive, Table} from 'react-bootstrap';
import m17 from "./image/28.jpg";
import m16 from "./image/27.jpg";
import './confirm.css';

var style = {
    width: "100%",
}
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:23
    }
};

class Checkout extends Component {
  render() {
    return (
      <div style={styles.font}>
      <Image style={style} height={90}src={m16} />
          <h1>สรุปคำสั่งซื้อ</h1>
          <Table responsive className="text">
              <thead>
                <tr>
                  <th className="text">เลขที่คำสั่งซื้อ</th>
                  <th className="text">รายการ</th>
                  <th className="text">จำนวน</th>
                  <th className="text">รวมเป็นเงิน</th>
                  <th className="text">หลักฐานการโอนเงิน</th>
                  <th className="text">แก้ไขหลักฐานการโอนเงิน</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01171160</td>
                  <td>แบ่งปันที่นา</td>
                  <td>1 ไร่</td>
                  <td>10,000 บาท</td>
                  <td><Button bsStyle="success">Choose File</Button></td>
                  <td><Button bsStyle="warning">แก้ไขหลักฐาน</Button></td>

                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
              <br></br>
            <Row>
            <Col sm={6} md={4}>
            </Col>
            <Col sm={6} md={4}>
              <button className="button">
              บันทึก
              </button>
            </Col>
            <Col xsHidden md={4}>
            </Col>
            </Row>
            <br></br>
            <Image style={style} height={300}src={m17} />
      </div>
    );
  }
}

export default Checkout;
