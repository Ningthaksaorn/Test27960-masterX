import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Carousel, Grid, Row, Col, Image, imageResponsiveInstance } from 'react-bootstrap';
import m4 from "./image/4.jpg";
import m5 from "./image/5.jpg";
import m6 from "./image/6.jpg";
import m7 from "./image/7.jpg";
import m8 from "./image/8.jpg";
import m9 from "./image/9.jpg";
import m10 from "./image/10.jpg";
import m12 from "./image/12.jpg";
import './home.css';

var style = {
    position: "fixedTop",
        width: "100%",
            textAlign: "center",
};
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:23

    }
};

class Home extends Component {
  render() {
    return (
          <div style={style, styles.font} >
              <Carousel className="home">
                <Carousel.Item>
                  <img width={1500} height={500} alt="1500*500"  src={m4}/>
                  <Carousel.Caption>
                    <h3>Kaw Hom Nokyoong</h3>
                    <p>ข้าวหอมนกยูง ปลอดสารพิษ ผลิตภัณฑ์เพื่อสุขภาพของดีตำบลจุน</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1500} height={500} alt="1500*500" src={m5}/>
                  <Carousel.Caption>
                    <h3>การใช้ประโยชน์จากธรรมชาติ เพื่อการผลิตอย่างยั่งยืน</h3>
                    <p>จากการปลูกข้าวอินทรีย์ต้องหลีกเลี่ยงการใช้ปุ๋ยเคมี ดังนั้นการเลือกพื้นที่ปลูกที่ดินมีความอุดมสมบูรณ์สูงตามธรรมชาติ</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1500} height={500} alt="1500*500" src={m6}/>
                  <Carousel.Caption>
                    <h3>ข้าวอินทรีย์ คืออะไร?</h3>
                    <p>วิธีการผลิตที่หลีกเลี่ยงการใช้สารเคมี หรือสารสังเคราะห์ต่างๆ</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <br></br>
              <br></br>
                                    <Grid>
                                      <Row>
                                        <Col xs={6} md={4}>
                                          <Image width={600} height={300} alt="600x300" src={m8} responsive />
                                        </Col>
                                        <Col xs={6} md={8}>
                                          <h2>ข้าวอินทรีย์ คืออะไร?</h2>
                                          <p>         ข้าวอินทรีย์ หรือ Organic rice เป็นข้าวที่ได้จากการผลิตแบบเกษตรอินทรีย์ (Organic agriculture หรือ Organic Farming) ซึ่งเป็นวิธีการผลิตที่หลีกเลี่ยงการใช้สารเคมี หรือสารสังเคราะห์ต่างๆ เป็นต้นว่า ปุ๋ยเคมี สารควบคุมการเจริญเติบโต สารควบคุมและกำจัดวัชพืช สารป้องกันกำจัดโรคแมลงและสัตว์ศัตรูข้าวในทุกขั้นตอนการผลิตและในระหว่างการเก็บรักษาผลผลิต หากมีความจำเป็นแนะนำให้ใช้วัสดุจากธรรมชาติและสารสกัดจากพืชที่ไม่มีพิษต่อคน หรือไม่มีสารพิษตกค้างปนเปื้อนในผลิตผลในดินและน้ำ ในขณะเดียวกันก็เป็นการรักษาสภาพแวดล้อม ทำให้ได้ผลิตผลข้าวที่มีคุณภาพดี ปลอดภัยจากอันตรายของผลตกค้างส่งผลให้ผู้บริโภคมีสุขอนามัยและคุณภาพชีวิตที่ดี</p>
                                        </Col>
                                      </Row>
                                      <br></br>
                                      <br></br>
                                      <Row>
                                        <Col xs={6} md={4}>
                                          <Image width={600} height={300} alt="600x300" src={m10} responsive />
                                        </Col>
                                        <Col xs={6} md={8}>
                                          <h2>ข้าวหอมนกยูง (ข้าวหอมอินทรีย์)</h2>
                                          <p>         เป็นสินค้าเด่นของ อำเภอจุล พะเยา เนื่องตำบลจุนมีป่าแม่จุนเป็นป่าต้นน้ำ ซึ่งมีความอุดมสมบูรณ์ อีกทั้งพื้นที่การเกษตรยังอยู่ในภูมิศาสตร์ที่เหมาะสม เป็นผลให้ข้าวหอมมะลิที่ปลูกในพื้นที่นี้มีลักษณะเด่น ในด้านความหอม และปลอดภัย เนื่องจากใช้วิธีการเพาะปลูกแบบเกษตรอินทรีย์ และที่ป่าแม่จุนเป็นถิ่นที่อยู่อาศัยของนกยูงไทยเป็นจำนวนมาก และตามความเชื่อนกยูงคือนกจากสรวงสวรรค์ ในฤดูที่ข้าวหอมมะลิในท้องนาสุกเหลืองอร่ามส่งกิล่นกอมชวนให้นกยูงลงมาจากป่าแม่จุน เพื่อลิ้มลองรสความหอมอร่อย ซึ่งเป็นที่มาของ ข้าวหอมนกยูง ข้าวที่เป็นที่น่าชื่นชม เนื่องจากสร้างชื่อเสียงให้แก่พะเยาและประเทศไทย ด้วยการส่งออกไปขายยังต่างประเทศ ด้วยเหตุนี้ จึงอยากให้ทุกท่านได้รู้จัก และลองหาโอกาสลิ้มลองข้าวหอมนกยูง จาก อำเภอจุน จังหวัดพะเยา ด้วยตัวของคุณเอง</p>
                                        </Col>
                                      </Row>

                                      <br></br>
                                      <br></br>

                                    </Grid>


                                    <Grid>
                                      <Row>
                                        <Col xs={6} md={4}>
                                          <Image width={150} height={147}  src={m7} circle />
                                        </Col>
                                        <Col xs={6} md={4}>
                                          <Image width={150} height={147}  src={m12} circle />
                                        </Col>
                                        <Col xs={6} md={4}>
                                          <Image width={150} height={147}  src={m9} circle />
                                        </Col>
                                      </Row>
                                    </Grid>
                                    <br></br>
                                    <br></br>
</div>
    );
  }
}
export default Home;
