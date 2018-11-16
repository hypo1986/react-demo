import React, {Component} from 'react'

export default class RadioCom extends Component {
  resizeOwn (e) {
    console.log('322')

    this.props.onClick(e)
  }

  render () {
    return (
      <div className='l'>
        <div className='choiceItem'>
          <div className='choiceItemOption' onClick={this.resizeOwn.bind(this)}>男</div>
          <div className='choiceItemOption'>女</div>
        </div>
        <div className='determine'>
          <div className='determineItem' onClick={this.resizeOwn.bind(this)}>123</div>
        </div>
      </div>
    )
  }
}
