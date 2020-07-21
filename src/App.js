import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <h1>Hello world !</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Minus
        </button>
        {this.state.count > 6 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </>
    );
  }
}

export default hot(module)(App);
