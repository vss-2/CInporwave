import React, { Component } from 'react';
import logo from './logo.svg';
import './AppHome.css';
import './indexHome.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Bingo from './bingo.js';


class AppHome extends Component {
  render() {
    return (
      <Router>
      <div className="nav">


        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            *
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

          <a href="/">Home</a>
          <div className="dropdownMenu">


            <button className="dropdownBotao"> Atividades</button>
            <ul className="dropdownConteudo">
              <li></li>
              <li><Link to ={'/bingo'}>Bingo</Link></li>
              <li></li>
              <a href="" target="_blank"> Português </a>
              <a href="" target="_blank"> Matemática </a>
              <Switch>
                <Route path="/bingo" component={Bingo}/>
              </Switch>
              <a href="" target="_blank"> Memória </a>
            </ul>


          </div>

          <a href="" target="_blank">Sobre nós</a>


        </div>

        <div className="meioTela">
          <h1>Adoleta</h1>


        </div>

      </div>
      </Router>
    );
  }
}

export default AppHome; 

/*              

  <a href="" target="./index.js"> Jogo </a>

        <Router>
          <Route path="./index.js" Component={Game} />
        </Router>

  function chamarJogo(){
    ReactDOM.render(
      <index />,
      document.getElementById('root')
    )
  }

  <div className="dropdownMenu">
            <button className="dropdownBotao">Cascata</button>
            <div className="dropdownConteudo">
              <a>Português</a>
              <a>Matemática</a>
              <a>Lógica</a>
              <a>Memória</a>
            </div>
          </div>
Código que funcionaria de dropdown, ficaria na linha após o <a>Atividades
*/
