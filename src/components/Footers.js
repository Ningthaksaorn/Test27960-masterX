import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {formInstance, Form ,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import m13 from "./image/13.png";

var style = {
    backgroundColor: "#000000",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%",
}
const styles = {
    font:{
      fontFamily: 'Kunlasatri',
      fontSize:18
    }
  };
  const styless = {
    fonts:{
      fontFamily: 'TH Niramit AS_1',
      fontSize:18
    }
};
const Footers = React.createClass({
    render: function() {
        return (
            <div style={style}>
            <h5 style={styles.font}> คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา 56000</h5>
                 Copyright © 2017  Inc.
                {this.props.children}
            </div>
        );
    }
});

export default Footers;
