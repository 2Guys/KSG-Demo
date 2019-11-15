import React from 'react';
// import ProgressBar from '../player/healthbar/Progress-bar'

const Map = (props) => {
  return ( 
    <div>
      {/* <ProgressBar /> */}
      <div 
        style={{
          position: 'relative',
          top: '0px',
          left: '0px',
          width: '800px',
          height: '400px',
          backgroundColor: 'green   ',
          border: '4px solid white',
          margin: '10px auto'
        }}
      />
    </div>

  );
}

export default Map;