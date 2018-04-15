import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import m11 from "./components/image/logo01.png";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import routes from './routing-config'
import Product from './components/product';
import Home from './components/Home';
import Shape from './components/Shape';
import Donate from './components/donate'
import Rent from './components/rent';
import Checkout from './components/Checkout';
import Logout from './Logout';
import Footers from './components/Footers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const styles = {
    font:{
      fontFamily: 'supermarket',
      fontSize:20
    }
};
class Navbars extends Component {


  render(){
      return(
        <BrowserRouter>
          <div>
            <div>
              <Navbar inverse collapseOnSelect style={styles.font}>
                  <Navbar.Header>
                  <a href="/"><Image width={50} height={45} alt="50x50" src={m11} /></a>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                    <LinkContainer to="/product">
                      <NavItem eventKey={1} href="#">สินค้า</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/rent">
                      <NavItem eventKey={2} href="#">เช่าที่นา</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Shape">
                      <NavItem eventKey={3} href="#">การท่องเที่ยว</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/donate">
                      <NavItem eventKey={4} href="#">บริจาค</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Checkout">
                      <NavItem eventKey={5} href="#">ชำระสินค้าและบริการ</NavItem>
                    </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                    <LinkContainer to="/Logout">
                      <NavItem eventKey={1} href="#">Logout</NavItem>
                    </LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <div >
                <Switch>
                  {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                </Switch>
              </div>
            <Footers />
          </div>
        </BrowserRouter>
    );
  }
}

export default Navbars;