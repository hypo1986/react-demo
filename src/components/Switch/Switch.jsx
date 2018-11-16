import React, {Component} from 'react'
import './Switch.less'
import FixedContent from '../page/FixedContent.jsx'

class Switch extends Component {
  constructor (props) {
    super(props)
    let {value, lists} = this.props
    this.state = {
      touchState: value || lists[0].value
    }
  }
  checkSwitch (item) {
    this.setState({
      touchState: item.value
    })
    let {onHandleClick, thisIndex, parentIndex} = this.props
    onHandleClick(item, thisIndex, parentIndex)
  }
  render () {
    let {touchState} = this.state
    let {lists, title} = this.props
    return (
      <FixedContent className='this'>
        <label>
          <div className='switch-title'>{title}</div>
          <div className='fengui-switch'>
            {lists && lists.map((item, index) => {
              return (
                <div onClick={this.checkSwitch.bind(this, item)} key={index} className={touchState === item.value ? 'active' : ''}><span>{item.name}</span></div>
              )
            })}
          </div>
        </label>
      </FixedContent>
    )
  }
}
export default Switch
