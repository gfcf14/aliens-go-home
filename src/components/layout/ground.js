import React, { Component } from 'react';
import propTypes from 'prop-types';
import { DefaultWidth } from 'utils/constants';
import './ground.scss';

class Ground extends Component {
  render () {
    const { groundWidth } = this.props;

    return (
      <g id='ground'>
        <rect
          className='ground'
          data-name='ground'
          height={100}
          id='ground-2'
          width={groundWidth}
          x={groundWidth / -2}
          y={0}
        />
        <line
          className='ground-divider'
          x1={groundWidth / -2}
          x2={groundWidth / 2}
          y1={0}
          y2={0}
        />
      </g>
    );
  }
}

Ground.propTypes = {
  groundWidth: propTypes.number.isRequired,
};

Ground.defaultProps = {
  groundWidth: DefaultWidth,
};

export {
  Ground,
};
