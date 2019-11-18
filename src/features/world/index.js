import React from 'react';
import Player from '../player'
import Enemy from '../enemy'
import ProgressBar from '../player/healthbar/progress-bar'
import EnemyProgressBar from '../enemy/healthbar/progress-bar'
import Map from '../map'
import Attack from '../player/attack/Attack'
import EnemyAttack from '../enemy/attack/EnemyAttack';
import GameOver from '../game over/GameOverScreen'

const World = (props) => {
  return (  
    <div>
      <div id='progress-header'>
        <ProgressBar />
        <EnemyProgressBar />
      </div>
      <Map />
      <Player />
      <Enemy />
      <Attack />
      <EnemyAttack />
      <GameOver />
    </div>
  );
}

export default World;