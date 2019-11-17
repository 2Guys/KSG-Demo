import React from 'react';
import Player from '../player'
// import Enemy from '../enemy'
import Map from '../map'
import Sky from '../sky'

const World = (props) => {
  return (  
    <div>
      {/* <Sky /> */}
      <Map />
      <Player />
      {/* <Enemy /> */}
    </div>
  );
}

export default World;