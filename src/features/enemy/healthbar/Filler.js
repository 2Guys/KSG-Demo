import React from 'react';

const Filler = (props) => {
  const { HP } = props
  return (  
    <div className='filler' style={{width: `${HP}%`}} />
  );
}

export default Filler;