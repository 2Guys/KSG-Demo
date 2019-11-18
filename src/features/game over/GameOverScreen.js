import React, {Component} from 'react'
import {connect} from 'react-redux'



class GameOver extends Component {
  render() { 
    const { playerHP, display } = this.props
    console.log("TCL: GameOver -> render -> playerHP,", playerHP,)
    const winner = playerHP <= 0 ? <div>You Lose </div> : <div>You Win</div>
    return ( 
    <div id='gameOver'
      style={{
        display:display
      }}
    > 
      <div id='text'>
        GAME OVER
        {winner}
        <button onClick={()=> {window.location.reload(true)}}>Replay</button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => { 
  return { 
    playerHP: state.player.HP,
    display: state.gameOver.display
  }
}

export default connect(mapStateToProps, null )(GameOver);