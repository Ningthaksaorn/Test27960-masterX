import React from 'react'
import { Redirect } from 'react-router'
import { Home, product, rent, Shape, index, donate, Confirm, Checkout} from './components'
import LoginManage from './loginManage';
import Logout from './Logout';
import Login from './login';

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/product',
    'component': product
  },
  {
    'path':'/rent',
    'component': rent
  },
  {
    'path':'/Shape',
    'component': Shape
  },
  {
    'path':'/LoginManage',
    'component': LoginManage
  },
  {
    'path':'/Logout',
    'component': Logout
  }  ,
    {
      'path':'/Donate',
      'component': donate
    },
    {
      'path':'/Home',
      'component': Home
    },
    {
      'path':'/Confirm',
      'component': Confirm
    },
    {
      'path':'/Checkout',
      'component': Checkout
    },
    {
      'path':'/Login',
      'component': Login
    }
];

export default routes;
