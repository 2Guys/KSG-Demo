import React, { Component } from 'react'
import HealthBar from './healthBar'
import { connect } from 'react-redux'
import { updateDisplay } from '../../game over/reducer'

class EnemyProgressBar extends Component {

  render() { 
    const { HP, gameOver } = this.props

    if(!HP) {
      gameOver('block')
    }
    return (  
      <div className='status-box'>
        <HealthBar HP={HP}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { 
    HP: state.enemy.HP
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    gameOver: display => {dispatch(updateDisplay(display))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnemyProgressBar)