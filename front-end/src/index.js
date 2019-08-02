import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Game from './bingo.js';
import AppHome from './AppHome.js';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render((
  <BrowserRouter>
    <AppHome />
  </BrowserRouter>
  ), document.getElementById('root')
  );