import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Table, Popover, Modal, NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, formInstance, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import m23 from "./image/23.jpg";
import m17 from "./image/17.jpg";
import m16 from "./image/16.jpg";
import m18 from "./image/29.JPG";

import './confirm.css';
import Confirm from "./Confirm";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ReactDOM from 'react-dom';
var style = {
    width: "100%",
}
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:23,
    }
};
class Rent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
  confirms(){
        return ReactDOM.render(<Confirm />, document.getElementById('root'));
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
      return(
        <div>
        <div style={styles.font}>
        <Image style={style} height={90}src={m16} />
            <h1>การแบ่งปันที่นา</h1>
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                <Image height={147}  src={m23} circle />
                </Col>
                <Col xs={6} md={8}>
                <h3>รายละเอียด :</h3>
                <p>เกษตรกร    :    นายขยัน    ทำนา</p>
                <p>พื้นที่       :    1 ไร่</p>
                <p>ให้ผลผลิต   :    600 กก./ไร่</p>
                <p>ราคาเช่า     :   10,000 บาทต่อปี</p>
                <button  className="button" onClick={this.open.bind(this)}>
                ตกลง
                </button>
                </Col>
              </Row>
              </Grid>
              <br></br>
              <Image style={style} height={500}src={m18} />
              <br></br>
              <br></br>

              <Image style={style} height={300}src={m17} />

        </div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div style={styles.font}>
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
                      <td>แบ่งปันที่นา</td>
                      <td>1 ไร่</td>
                      <td>10,000 บาท</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>ยอดสุทธิ</td>
                      <td>10,000 บาท</td>
                    </tr>
                    <tr>
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
                    <h3>.   *หากคุณต้องการยืนยันการทำรายการ กรุณาคลิก "ยืนยันการแบ่งปัน"</h3>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>
                  <br></br>
                  <button className="button">ยืนยัน</button>
                  <button className="button">พิมพ์</button>
                  <button className="button2" onClick={this.close.bind(this)}>Close</button>
                <br></br>
          </div>
          </Modal.Body>
        </Modal>

      </div>
      );
    }

}

export default Rent;
