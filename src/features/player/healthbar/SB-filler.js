import React from 'react';

const SBFiller = (props) => {
  const { SB } = props
  // console.log("TCL: Filler -> SB", SB)
  return (  
    <div className='SB-filler' style={{width:`${SB}%`}}/>
  );
}

export default SBFiller;