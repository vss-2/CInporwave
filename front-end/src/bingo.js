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
          <button className = {props.id} onClick={props.onClick} id = {props.id}>
              {props.value}
          </button>
      );
  }
  
  class Board extends React.Component {
      
    renderSquare(i, color) {
        return <Square value = {this.props.squares[i]} onClick={() => this.props.onClick(i)} id = {color}/>;
    }
    
    
    render() {
        const squareCor = this.props.squareColor;
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(0, squareCor[0])}
                {this.renderSquare(1, squareCor[1])}
                {this.renderSquare(2, squareCor[2])}
                {this.renderSquare(3, squareCor[3])}
                {this.renderSquare(4, squareCor[4])}
            </div>
            <div className="board-row">
                {this.renderSquare(5, squareCor[5])}
                {this.renderSquare(6, squareCor[6])}
                {this.renderSquare(7, squareCor[7])}
                {this.renderSquare(8, squareCor[8])}
                {this.renderSquare(9, squareCor[9])}
            </div>
            <div className="board-row">
                {this.renderSquare(10, squareCor[10])}
                {this.renderSquare(11, squareCor[11])}
                {this.renderSquare(12, squareCor[12])}
                {this.renderSquare(13, squareCor[13])}
                {this.renderSquare(14, squareCor[14])}
            </div>
            <div className="board-row">
                {this.renderSquare(15, squareCor[15])}
                {this.renderSquare(16, squareCor[16])}
                {this.renderSquare(17, squareCor[17])}
                {this.renderSquare(18, squareCor[18])}
                {this.renderSquare(19, squareCor[19])}
            </div>
            <div className="board-row">
                {this.renderSquare(20, squareCor[20])}
                {this.renderSquare(21, squareCor[21])}
                {this.renderSquare(22, squareCor[22])}
                {this.renderSquare(23, squareCor[23])}
                {this.renderSquare(24, squareCor[24])}
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
            acerto: 'square',
            squareColor: Array(25).fill('square'),
        };
    }

    

    init () {
        axios.get('http://localhost:3333/cartelas/novacartela')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    squares: result.tabela
                });
                console.log(result.tabela)
        })
        .catch(error => {alert("Falha ao carregar"); console.log(error.response)});
    }

    getCartela () {
        axios.get('http://localhost:3333/cartelas')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.tabela)
                let aux = Array(25).fill(null);
                for (let k = 0; k < 25; k ++) {
                    aux[k] = result.usados[k];
                }
                this.setState({
                    squares: result.tabela,
                    squareColor: aux
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
        const SquareCor = this.state.squareColor.slice();
        
        if (SquareCor[i] === 'squareRight') { //Não seleciona quadrado que foi clicado corretamente
            return;
        }

        let cartela = this.updateCartela(i);
        if (cartela === 'Errou') {
            alert("Tente novamente :(");
            return;
        } else if (cartela === 'Acertou') {
            //squares[i] = this.state.xIsNext? 'X' : 'O';
            SquareCor[i] = 'squareRight'
            this.setState({
                squares: squares,
                acerto: 'squareRight',
                squareColor: SquareCor
            });
        }
    }

    
    componentDidMount () {
        if (localStorage.getItem('cartela')) {
            // this.setState({
            //     squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            //     18, 19, 20, 21, 22, 23, 24, 25]
            // });
            this.getCartela();
        } else {
            localStorage.setItem('cartela', true);
            // this.setState({
            //     squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            //     18, 19, 20, 21, 22, 23, 24, 25]
            // });
            this.init();
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
        
        return (
        <div className="game">
          <div className="game-board">
            <Board
                squares = {square}
                onClick = {(i) => this.handleClick(i)}
                id = {this.state.acerto}
                squareColor = {this.state.squareColor}
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
  