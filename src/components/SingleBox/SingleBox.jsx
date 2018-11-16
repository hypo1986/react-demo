import React, {Component} from 'react'
import './SingleBox.less'
import FixedContent from '../page/FixedContent.jsx'

class SingleBox extends Component {
  constructor (props) {
    super(props)
    let {value} = this.props
    this.state = {
      onCurrent: value
    }
  }
  checkSingle (item, e) {
    this.setState({
      onCurrent: item.value
    })
    let {onHandleClick, keyIndex, insHandleClick, thisIndex, parentIndex} = this.props
    onHandleClick && onHandleClick(e, item, keyIndex)
    insHandleClick && insHandleClick(item, thisIndex, parentIndex)
  }
  render () {
    let {onCurrent} = this.state
    let {lists, insType} = this.props
    // console.log(insType)
    return (
      <FixedContent className='this'>
        <div className={insType === 'selection' ? 'single selection' : 'single'}>
          {lists && lists.map((item, index) => {
            return (
              <div key={index} onClick={this.checkSingle.bind(this, item)} className={onCurrent === item.value ? 'single-list cur' : 'single-list'}>{item.name}</div>
            )
          })}
        </div>
      </FixedContent>
    )
  }
}
export default SingleBox
