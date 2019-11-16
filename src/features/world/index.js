import React from 'react';
import Player from '../player'
// import Enemy from '../enemy'
import Map from '../map'

const World = (props) => {
  return (  
    // <div
    //   style={{
    //     position: 'relative ',
    //     width: '800px',
    //     height: '400px',
    //     margin: '20px auto'
    //   }}
    // >
    <div>

      <Map />
      <Player />
      {/* <Enemy /> */}
    </div>
  );
}

export default World;