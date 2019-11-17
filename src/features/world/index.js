import React from 'react';
import Player from '../player'
// import Enemy from '../enemy'
import Map from '../map'

const World = (props) => {
  return (  
    <div>
      <Map />
      <Player />
      {/* <Enemy /> */}
    </div>
  );
}

export default World;