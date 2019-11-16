import React from 'react';
import Player from '../player'
import Enemy from '../enemy'
import ProgressBar from '../player/healthbar/Progress-bar'
import Map from '../map'
import Attack from '../player/attack/Attack'

const World = (props) => {
  return (  
    <div
      styele={{
        position: 'relative ',
        width: '800px',
        height: '400px',
        margin: '20px auto'
      }}
    > 
      <ProgressBar />
      <Map />
      <Player />
      <Enemy />
      <Attack />
    </div>
  );
}

export default World;