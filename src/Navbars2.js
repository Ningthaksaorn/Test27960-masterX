import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {NavItem, NavDropdown, Nav, Navbar, navbarInstance, MenuItem, mountNode, Image} from 'react-bootstrap';
import m11 from "./components/image/logo1.png";
import Footers from './components/Footers';
import routes from './routing-config'
var style = {
    position: "fixedTop",
};

class Navbars2 extends Component {
    render() {
        return (
          <BrowserRouter>
            <div style={style}>
            <div className="App-header">
            <Navbar inverse collapseOnSelect>
             <Navbar.Header>
              <a href="/"><Image width={50} height={45} alt="50x50" src={m11} /></a>
               <Navbar.Brand>

               </Navbar.Brand>
               <Navbar.Toggle />
             </Navbar.Header>
             <Navbar.Collapse>
               <Nav>
                 <NavItem eventKey={1} ><NavLink to="/Product" activeClassName="active">สินค้า</NavLink></NavItem>
                 <NavItem eventKey={3} ><NavLink to="/Shape" activeClassName="active">การท่องเที่ยว</NavLink></NavItem>
                 <NavItem eventKey={4} ><NavLink to="/Product" activeClassName="active">บริจาค</NavLink></NavItem>
               </Nav>
               <Nav pullRight>
                 <NavItem eventKey={5} ><NavLink to="/Login" activeClassName="active">Login</NavLink></NavItem>

               </Nav>

             </Navbar.Collapse>
            </Navbar>
            </div>
            <div>
             <Switch>
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
             </Switch>
            </div>
            <br></br>
            <br></br>

            <Footers />

            </div>

            </BrowserRouter>
        );
    }
};

export default Navbars2;
