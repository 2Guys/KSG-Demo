import React from 'react'
import Filler from './Filler'

const HealthBar = (props) => {
  const { HP } = props
  return ( 
    <div>
      <h4>HP:</h4>
      <div id="enemy-health">
        <Filler HP={HP} />
      </div>
    </div>
  );
}

export default HealthBar;