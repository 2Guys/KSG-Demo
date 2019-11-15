import React from 'react';
import SBFiller from './SB-filler'

const StressBar = (props) => {
  const  { SB} = props
  return ( 
    <div>
      <h4>SB:</h4>
      <div id='players-stress'>
          <SBFiller  SB={SB}/>
      </div>
    </div>

  );
}

export default StressBar;