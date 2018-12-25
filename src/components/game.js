import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialMessage } from 'actions/initial-message';

class Game extends Component {
  componentDidMount () {
    this.props.getInitialMessage();
  }

  render () {
    const { message } = this.props;

    return (
      <h1>{message}</h1>
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
