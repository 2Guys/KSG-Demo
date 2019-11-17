import React, { Component } from 'react'
import HealthBar from './healthBar'
import { connect } from 'react-redux'

class EnemyProgressBar extends Component {

  render() { 
    const { HP } = this.props

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

export default connect(mapStateToProps, null)(EnemyProgressBar)