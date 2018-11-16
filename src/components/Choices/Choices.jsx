import React, {Component} from 'react'
import './Choices.less'
import FixedContent from '../page/FixedContent.jsx'
// let _ = require('lodash')

class Choices extends Component {
  constructor (props) {
    super(props)
    let {value, lists} = this.props
    this.state = {
      selectLists: value || lists || [],
      isShowAdd: false,
      addChildType: ''
    }
  }
  checkItemLen (arr,len){
    let maxLen = 0
    arr.forEach((item) => {
      if (item.isChecked) {
        maxLen++
      }
    })
    if (maxLen >= len) {
      return false
    } else {
      return true
    }
  }
  addChoice (e){
    let {isShowAdd} = this.state || {}
    this.setState({
      isShowAdd: !isShowAdd
    })
  }
  choiceChild (index, e) {
    this.setState({
      addChildType: index
    })
  }
  addChild (e){
    let {onHandleClick, keyIndex} = this.props
    let {selectLists, addChildType} = this.state || {}
    if (!this.checkItemLen(selectLists, 9) ){
      this.setState({
        isShowAdd: false
      })
      return false
    }
    if (addChildType !== ''){
      let itemObj = {
        value: "",
        name: "",
        show: true,
        isChecked: true
      }
      if (addChildType === 0) {
        itemObj.value = '06'
        itemObj.name = '儿子'
      } else if (addChildType === 1) {
        itemObj.value = '07'
        itemObj.name = '女儿'
      }
      selectLists.push(itemObj)
      this.setState({
        selectLists: selectLists,
        isShowAdd: false
      })
      onHandleClick && onHandleClick(e, selectLists, keyIndex)
    }
  }
  checkChoice (index, e) {
    let {value, lists} = this.props
    let selectLists = value || lists
    let {onHandleClick, keyIndex, insHandleClick, thisIndex, parentIndex} = this.props
    let thisName = selectLists[index].name
    let arrLen = selectLists.length - 1
    if (keyIndex === 2 && !selectLists[index].isChecked) {
      if (!this.checkItemLen(selectLists, 9) ){
        return false
      }
    }
    if (keyIndex === 8) {
      if (thisName !== '以上全无') {
        selectLists[index].isChecked ? selectLists[index].isChecked = !selectLists[index].isChecked : selectLists[index].isChecked = true
        selectLists[arrLen].isChecked = false
      } else {
        selectLists.forEach((item) => {
          item.isChecked = false
        })
        selectLists[arrLen].isChecked = true
      }
    } else {
      selectLists[index].isChecked ? selectLists[index].isChecked = !selectLists[index].isChecked : selectLists[index].isChecked = true
    }
    this.setState({
      selectLists: selectLists
    })
    onHandleClick && onHandleClick(e, selectLists, keyIndex)
    insHandleClick && insHandleClick(selectLists, thisIndex, parentIndex)
  }
  componentDidMount () {
    let {curChkVal} = this.props
    let {selectLists} = this.state || {}
    let {onHandleClick, keyIndex, insHandleClick, thisIndex, parentIndex} = this.props
    // let selectLists = value || lists
    if (curChkVal) {
      curChkVal = curChkVal - 1
      selectLists[curChkVal].isChecked = true
      this.setState({
        selectLists: selectLists
      })
      let e = e || window.e
      onHandleClick && onHandleClick(e, selectLists, keyIndex)
      insHandleClick && insHandleClick(selectLists, thisIndex, parentIndex)
    }
  }
  render () {
    let {isAdd, curChkVal, title} = this.props
    let {value, lists} = this.props
    let selectLists = value || lists
    let {addChildType, isShowAdd} = this.state || {}
    curChkVal = curChkVal - 1
    return (
      <FixedContent className='this'>
        <div className='fengui-choices-list'>
          <div>{title}</div>
          <ul className='three-column'>
            {selectLists && selectLists.map((item, index) => {
              let className = item.isChecked ? 'active' : ''
              let isShow = item.show
              return (
                isShow && <li key={index} className={className} onClick={(index !== curChkVal) ? this.checkChoice.bind(this, index) : undefined}>{item.name}</li>
              )
            })}
          </ul>
          {isAdd && <div className='add-child' onClick={this.addChoice.bind(this)}>添加子女</div>}
        </div>
        {isShowAdd && <div className={'add-child-fix'}>
          <div className={'child-main'}>
            <ul>
              <li className={addChildType === 0 ? 'on' : ''} onClick={this.choiceChild.bind(this, 0)}>儿子</li>
              <li className={addChildType === 1 ? 'on' : ''} onClick={this.choiceChild.bind(this, 1)}>女儿</li>
            </ul>
            <button className='confirmAdd' onClick={this.addChild.bind(this)}>确认选择</button>
          </div>
        </div>}
      </FixedContent>
    )
  }
}
export default Choices
