import React from 'react';

const EnemyFiller = (props) => {
  const { HP } = props
  return (  
    <div className='enemy-filler'  style={{width: `${HP}%`}} />
  );
}

export default EnemyFiller;