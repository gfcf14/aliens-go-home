import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialMessage } from 'actions/initial-message';
import { Canvas } from './layout/canvas';

class Game extends Component {
  componentDidMount () {
    this.props.getInitialMessage();
  }

  render () {
    return (
      <Canvas />
    );
  }
}

const mapStateToProps = (state) => {
  const { message } = state.gameReducer;

  return {
    message,
  };
};

const mapDispatchToProps = {
  getInitialMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
