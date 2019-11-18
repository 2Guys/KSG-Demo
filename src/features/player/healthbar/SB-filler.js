import React from 'react';

const SBFiller = (props) => {
  const { SB } = props
  return (  
    <div className='SB-filler' style={{width:`${SB}%`}}/>
  );
}

export default SBFiller;