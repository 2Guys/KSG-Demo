
import React from 'react';
import HealthBar from './healthbar'
import StressBar from './stressBar'
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
    this.increaseHP = this.increaseHP.bind(this)
    this.increaseSB = this.increaseSB.bind(this)
    this.decreaseHP = this.decreaseHP.bind(this)
  }

  componentDidMount(){
    setInterval(this.decreaseHP, 1000)
    setInterval(this.increaseSB, 1000)
  }

  increaseHP(){
    let { HP, rate } = this.state
    if(HP > 100){
      HP = 99
    }
    if(HP < 100){
      HP += rate
      this.setState({
        HP
      })
    }
  }


  decreaseHP() {
    let { HP, rate } = this.state
    if(HP > 100){
      HP = 99
    }

    if(HP <= 100 && HP >= 2){
      HP -= rate
      this.setState({
        HP
      })
      return HP
    }
  } 

  increaseSB(){
    let { SB } = this.state
    if(SB < 100){
      SB += 2
      this.setState({
        SB,
        rate: 1
      })
    }
    else{
      console.log('HERE')
      this.setState({
        rate: 10
      })
    }
  }


  decreaseSB() {
    let { SB } = this.state

    if(SB <= 100 && SB >= 0){
      SB -= 1
      this.setState({
        SB
      })
    }
  } 

  


  render() { 
    const { movement } = this.props

    if(movement){
      this.increaseHP()
      this.decreaseSB()
    }

    return ( 
      <div className="status-box">
        <HealthBar HP={this.state.HP} />
        <StressBar SB={this.state.SB}/>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return  {
    movement: state.player.movement
  }
}

export default connect(mapStateToProps, null)(ProgressBar);

// While Yebear is is moving helath increases to 100% when movement Yebear loses HP by .5