import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, Button, responsive, Table} from 'react-bootstrap';
import m17 from "./image/17.jpg";
import m16 from "./image/16.jpg";
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

class Confirm extends Component {
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
                  <th className="text">ราคา</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01171160</td>
                  <td>ที่นา</td>
                  <td>1 ไร่</td>
                  <td>10,000 บาท</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>ยอดสุทธิ</td>
                  <td>10,000 บาท</td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <h3 className="text">*หากคุณต้องการยืนยันการทำรายการ กรุณาคลิก "ยืนยันการแบ่งปัน"</h3>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
              <br></br>
            <Row>
            <Col sm={6} md={3}>
            </Col>
            <Col sm={6} md={3}>
              <button className="button">
              ยืนยัน
              </button>
            </Col>
            <Col sm={6} md={3}>
              <button className="button">
              พิมพ์
              </button>
            </Col>
            <Col sm={6} md={3}>
            </Col>
            </Row>
            <br></br>
            <Image style={style} height={300}src={m17} />
      </div>
    );
  }
}

export default Confirm;
