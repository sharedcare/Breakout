import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }

}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballX: 200,
      ballY: 400,
      speedX: 1.0,
      speedY: 1.0
    };

    this.update = this.update.bind(this)
  }

  moveBall() { 
    this.setState((prevState, props) => 
      {
        console.log(prevState.ballX + prevState.speedX);
        return {
            ballX: prevState.ballX + prevState.speedX,
            ballY: prevState.ballY + prevState.speedY
          }});
  }

  resetBall() {
    this.setState({
      ballX: 100,
      ballY: 100,
      speedX: 1.0,
      speedY: 1.0
    });
  }

  componentDidMount() {
    this._updateInterval = window.setInterval(this.update, 16)
  }

  update() {
    this.moveBall()
    this.hitWall()
  }

  hitWall() {
    if (this.state.ballX >= 400 || this.state.ballX <= 0) {
      this.setState((prevState, props) => ({
        speedX: prevState.speedX * -1
      }));
    }
    if (this.state.ballY >= 600 || this.state.ballY <= 0) {
      this.setState((prevState, props) => ({
        speedY: prevState.speedY * -1
      }));
    }
  }

  render() {
    return (
      <div className="Board">
        <Ball ballX={this.state.ballX} ballY={this.state.ballY} />
      </div>
    );
  }
}


const Ball = props => {
  const styles = {
      left: props.ballX,
      top: props.ballY
    }
    return (
      <div className="Ball" style={ styles }>
      </div>
    );
}

/*
class Ball extends Component {
  render() {
    const styles = {
      left: this.props.ballX,
      top: this.props.ballY
    }
    return (
      <div className="Ball" style={ styles }>
      </div>
    );
  }
}
*/


export default App;