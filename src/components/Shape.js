import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image} from 'react-bootstrap';

import m18 from "./image/18.png";
import m19 from "./image/19.jpg";
import m21 from "./image/21.jpg";
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:23
    }
};
class Shape extends Component {
  render() {
    return (
      <div style={styles.font} >

                              <Grid>
                                <Row>
                                  <Col xs={6} md={4}>
                                    <Image width={150} height={147}  src={m18} circle />
                                  </Col>
                                  <Col xs={6} md={4}>
                                    <Image width={150} height={147}  src={m19} circle />
                                  </Col>
                                  <Col xs={6} md={4}>
                                    <Image width={150} height={147}  src={m21} circle />
                                  </Col>
                                </Row>
                              </Grid>
                              <br></br>
                              <br></br>

                              <Grid>
                                <Row>
                                  <Col xs={6} md={4}>
                                    <Image width={600} height={300} alt="600x300" src={m18} responsive />
                                  </Col>
                                  <Col xs={6} md={8}>
                                    <h2>ข่วงนกยูง</h2>
                                    <p>         อำเภอจุนชู “ข่วงนกยูง” เป็นแหล่งท่องเที่ยว “หนึ่งตำบล หนึ่งอำเภอ หนึ่งแหล่งท่องเที่ยว” เชื่อมโยง “เวียงลอ เมืองโบราณ” สร้างสำนึกรักบ้านเกิด</p>
                                  </Col>
                                </Row>
                                <Row>
                                <Col xs={6} md={8}>
                                  <h2>ชมรมอนุรักษ์นกยูงฯ บ้านกิ่วแก้ว</h2>
                                  <p>          ทางอำเภอจุนได้ประชุมหน่วยงานต่างๆ ประกอบด้วย เขตรักษาพันธุ์สัตว์ป่าเวียงลอ, เทศบาลตำบลห้วยข้าวก่ำ, สถานีตำรวจภูธรจุน, ท่องเที่ยวและกีฬา, คณะกรรมการชมรมอนุรักษ์นกยูงฯ บ้านกิ่วแก้ว และเจ้าอาวาสวัดกิ่วแก้ว เพื่อวางแผนร่วมกันในการสนับสนุนและพัฒนา “ข่วงนกยูงเพื่อแม่” ให้เป็นแหล่งอนุรักษ์ธรรมชาติ สัตว์ป่า และศึกษาวิถีชีวิตของนกยูง</p>
                                </Col>
                                  <Col xs={6} md={4}>
                                    <Image width={600} height={300} alt="600x300" src={m19} responsive />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={6} md={4}>
                                    <Image width={600} height={300} alt="600x300" src={m21} responsive />
                                  </Col>
                                  <Col xs={6} md={8}>
                                    <h2>“ข่วงนกยูงเพื่อแม่”</h2>
                                    <p>         สำหรับ “ข่วงนกยูงเพื่อแม่” เกิดจากการรวมตัวของเยาวชน และประชาชนบ้านกิ่วแก้ว หมู่ 8 ต.ห้วยข้าวก่ำ อ.จุน จัดตั้งเป็นชมรมอนุรักษ์นกยูงไทยขึ้นจากเหตุผล 2 ประการ คือ คนและสัตว์ป่าอยู่ร่วมกันอย่างเป็นสุข, อนุรักษ์นกยูงพันธุ์ไทยแท้ให้คงอยู่ตลอดไป โดยร่วมกับเขตรักษาพันธุ์สัตว์ป่าเวียงลอ (ขสป.เวียงลอ) จัดทำแหล่งอาหารให้นกยูงบริเวณหลังวัดศรีสุดาราม ให้นกยูงลงหากินและใช้ชื่อว่า “ข่วงนกยูงเพื่อแม่”</p>
                                  </Col>
                                </Row>
                                </Grid>
                                <br></br>
                                <br></br>
      </div>
    );


  }
}

export default Shape;
