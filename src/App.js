import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions/appActions';
import './styles.scss';

class App extends Component {
  componentDidMount = () => {};

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
        <img src="/images.jpeg" />
        <img src="/images.jpeg" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  demoEvent: () => dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
