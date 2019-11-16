import React from 'react';

const Filler = (props) => {
  const { HP,} = props
  // console.log("TCL: Filler -> HP", HP)
  return (  
    <div className='filler' style={{width: `${HP}%`}} />
  );
}

export default Filler;