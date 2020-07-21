import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <>
        <h1>Hello world !</h1>
        <button
          onClick={() => {
            this.props.demoEvent();
          }}
        >
          Click here to dispatch demo action
        </button>
        <p>{this.props.app.age} is here</p>
        <p>{this.props.app.loading ? <>Loading...</> : <></>}</p>
      </>
    );
  }
}

const actionCreator = () => ({
  type: 'FETCH_ITEMS',
  promise: () => fetch('https://jsonplaceholder.typicode.com/photos'),
});

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  demoEvent: () => dispatch(actionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
