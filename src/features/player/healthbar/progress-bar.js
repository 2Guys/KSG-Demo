
import React from 'react';
import HealthBar from './healthbar'
import StressBar from './stressBar'
import { 
  increasedHP, 
  decreasedHP, 
  increasedSB, 
  decreasedSB,
  increasedRate, 
  decreasedRate,
} from '../reducer'
import { connect } from  'react-redux'


class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    /*
    HP = Health Bar
    SB = Stress Bar
    */
    this.state = { 
      HP: 100,
      SB: 0,
      rate: 1
    } 
    this.updateHP = this.updateHP.bind(this)
    this.updateSB = this.updateSB.bind(this)
  }

  componentDidMount(){
    setInterval(this.updateHP, 1000)
    setInterval(this.updateSB, 1000)
  }

  updateHP() {
    let { HP, rate, decreasedHP, increasedHP, movement } = this.props
    
    if(HP > 100){
      HP = 99
    }

    if(HP < 0){
      HP = 0
    }

    if(HP <= 100 && HP >= 2 && !movement){
      HP -= rate
      
      decreasedHP(HP)
    }
    else if(HP < 100 && movement){
      HP += rate + 1
      if(HP > 100){
        HP = 100
      }
      increasedHP(HP)
    }
  } 

  updateSB(){
    let { SB, increasedSB, decreasedSB, increasedRate, decreasedRate, movement, rate } = this.props

    if(SB > 100){
      SB = 100
    }


    if(SB < 0){
      SB = 0
    }

    if(SB === 100){
      rate = 3
      increasedRate(rate)
    }
    else if(rate === 3 && SB !== 100){
      rate  = 1
      decreasedRate(rate)
    }

    if(SB < 100 && !movement){
      SB += 2
      increasedSB(SB)
    }
    else if(SB > 0 && movement){
      SB -= 4
      decreasedSB(SB)
    }
  }



  render() { 
    const {HP, SB } = this.props


    return ( 
      <div className="status-box">
        <HealthBar HP={HP} />
        <StressBar SB={SB}/>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return  {
    movement: state.player.movement,
    HP: state.player.HP,
    SB: state.player.SB,
    rate: state.player.rate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decreasedHP: (HP)=> { dispatch(decreasedHP(HP))},
    increasedHP: (HP)=> { dispatch(increasedHP(HP))},
    decreasedSB: (SB)=> { dispatch(decreasedSB(SB))},
    increasedSB: (SB)=> { dispatch(increasedSB(SB))},
    decreasedRate: (rate)=> { dispatch(decreasedRate(rate))},
    increasedRate: (rate)=> { dispatch(increasedRate(rate))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);

// While Yebear is is moving helath increases to 100% when movement Yebear loses HP by .5