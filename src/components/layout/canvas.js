import React from 'react';
import { Sky } from './sky';
import { Ground } from './ground';
import './canvas.scss';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      className='game-canvas'
      id='aliens-go-home-canvas'
      preserveAspectRatio='xMaxYMax none'
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export {
  Canvas,
};
