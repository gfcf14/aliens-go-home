import React, { Component } from 'react';
import propTypes from 'prop-types';
import { DefaultWidth } from 'utils/constants';
import './sky.scss';

class Sky extends Component {
  render () {
    const { gameHeight, skyWidth } = this.props;

    return (
      <rect
        className='sky'
        height={gameHeight}
        width={skyWidth}
        x={skyWidth / -2}
        y={100 - gameHeight} />
    );
  }
}

Sky.propTypes = {
  gameHeight: propTypes.number.isRequired,
  skyWidth: propTypes.number.isRequired,
};

Sky.defaultProps = {
  gameHeight: 1200,
  skyWidth: DefaultWidth,
};

export {
  Sky,
};
