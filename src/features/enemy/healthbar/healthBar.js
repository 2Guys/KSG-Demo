import React from 'react'
import EnemyFiller from './Enemy-Filler'

const HealthBar = (props) => {
  const { HP } = props
  return ( 
    <div>
      <h4>HP:</h4>
      <div id="enemy-health">
        <EnemyFiller HP={HP} />
      </div>
    </div>
  );
}

export default HealthBar;