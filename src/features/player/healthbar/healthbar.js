import React from 'react';
import Filler from './filler'

const HealthBar = props => {
  const { HP, SB } = props
  return ( 
    <div>
      <h4>HP:</h4>
      <div id='players-health'>
          <Filler HP={HP} SB={SB} />
      </div>
    </div>

  );
}

export default HealthBar;