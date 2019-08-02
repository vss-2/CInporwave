import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            CInporwave
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <a href="" target="_blank">Atividades</a>
          <a href="" target="_blank">Configurações</a>
          <a href="" target="_blank">Sobre nós</a>
        </div>
        <div className="meioTela">
          <a>CInporwave</a>
        </div>
      </div>
    );
  }
}

export default App;
