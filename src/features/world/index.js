import React from 'react';
import Player from '../player'
import Enemy from '../enemy'
import ProgressBar from '../player/healthbar/progress-bar'
import Map from '../map'
import Attack from '../player/attack/Attack'

const World = (props) => {
  return (  
    <div>
      <ProgressBar />
      <Map />
      <Player />
      <Enemy />
      <Attack />
    </div>
  );
}

export default World;