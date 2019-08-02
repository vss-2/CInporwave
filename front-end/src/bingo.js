import React from 'react';
import './bingo.css';
import axios from 'axios';

/*class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }*/
  function Square (props) {
      return (
          <button className = "square" onClick={props.onClick} id = {props.id}>
              {props.value}
          </button>
      );
  }
  
  class Board extends React.Component {
      
    renderSquare(i) {
        return <Square value = {this.props.squares[i]} onClick={() => this.props.onClick(i)} id = {this.props.id}/>;
    }
  
    render() {
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
            </div>
            <div className="board-row">
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
            </div>
            <div className="board-row">
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
            </div>
            <div className="board-row">
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
            </div>
            <div className="board-row">
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
            </div>
            </div>
        );
    }
}


class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            squares: Array(25).fill(null), 
            xIsNext: true,
        };
    }

    init () {
        axios.get('http://localhost:3333/cartelas/novacartela')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    history: [{
                        squares: result.tabela
                    }],
                });
        })
        .catch(error => {alert("Falha ao carregar"); console.log(error.response)});
    }

    getCartela () {
        axios.get('http://localhost:3333/cartelas')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    history: [{
                        squares: result.tabela
                    }],
                });
        })
        .catch(error => {alert("Falha ao carregar"); console.log(error.response)})
    }

    updateCartela(position) {
        axios.put('http://localhost:3333/cartelas', {
            pos: position
        })
        .then(response => {
            return response.message;
        })
        .catch(error => {
            alert("Falha ao selecionar item");
            console.log(error.response);
        });
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        
        
        /*if (/*calculateWinner(squares) || squares[i]) { MUDAR para não apertar botão já pressionado
            return;
        }*/


        //if (this.updateCartela() === 'Errou') {
        //    return;
        //} else if (this.updateCartela() === 'Acertou') {
            //squares[i] = this.state.xIsNext? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
        //}
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) === 0,
        });
    }
    
    componentDidMount () {
        if (localStorage.getItem('cartela')) {
            this.getCartela();
            this.setState({
                squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25]
            });
        } else {
            localStorage.setItem('cartela', true);
            //this.init();
            this.setState({
                squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25]
            });
        }
    }

    render() {
        const square = this.state.squares.slice();
        //const current = history[this.state.stepNumber];
        //const winner = calculateWinner(current.squares);


        let status;
        //if (winner) {  WINNER!!
        //    status = 'Winner: ' + winner; 
        //} 
        
        let squareState = "square";
        return (
        <div className="game">
          <div className="game-board">
            <Board
                squares = {square}
                onClick = {(i) => this.handleClick(i)}
                id = {squareState}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* */}</ol>
          </div>
        </div>
      );
    }
  }
  
  export default Game;
  // ========================================
  
  

  
  /*function calculateWinner (squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i ++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }*/