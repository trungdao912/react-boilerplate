import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Minus
        </button>
      </>
    );
  }
}

export default hot(module)(App);
