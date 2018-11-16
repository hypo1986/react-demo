import React, { Component } from 'react'
import './scale.css'

export default class Scale extends Component {
  constructor () {
    super()
    this.state = {
      touchStart: 0,
      moveLen: 0,
      movelens: 0,
      spanWid: 0,
      inputVale: 0,
      defaultMin: 0
    }
  }

  createDom (domLen) {
    var liStr = ''
    var spanList = '<span></span>'
    for (var i = 0; i < domLen; i++) {
      liStr += '<li>' + spanList.repeat(10) + '<em>' + i * 10 + '</em></li>'
    }
    $('.scale').html(liStr)
    $('.scale').css('width', 750)
  }
  touchStart (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
    // get当前translate的值
    this.state.moveLen = +(window.getComputedStyle(e.target.querySelectorAll('ul.scale')[0]).transform.replace(/[^0-9\-.,]/g, '').split(',')[4])
    // get手势在当前屏幕上的位置
    this.state.touchStart = +(e.targetTouches[0].screenX)
  }

  touchMove (e) {
    let {onHandleClick, thisIndex, parentIndex} = this.props
    let nowLen = 0
    let nowInput = 0
    this.state.moveLens = +(e.targetTouches[0].screenX - this.state.touchStart)
    nowLen = this.state.moveLens + this.state.moveLen
    e.target.querySelectorAll('ul.scale')[0].style.transform = 'translateX(' + nowLen + 'px)'
    nowInput = nowLen / e.target.querySelectorAll('ul.scale')[0].querySelectorAll('li')[0].clientWidth
    if (nowLen >= 0) {
      this.setState({
        inputVale: 0
      })
      onHandleClick(0, thisIndex, parentIndex)
    } else if (Math.abs(nowLen) > $('.scale').width()) {
      let scale = e.target.querySelectorAll('ul.scale')[0].querySelectorAll('span').length
      this.setState({
        inputVale: scale
      })
      onHandleClick(scale, thisIndex, parentIndex)
    } else {
      this.setState({
        inputVale: Math.abs(Math.round(nowInput * 10))
      })
      onHandleClick(Math.abs(Math.round(nowInput * 10)), thisIndex, parentIndex)
    }
  }
  touchEnd (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
    this.state.moveLen = +(window.getComputedStyle(e.target.querySelectorAll('ul.scale')[0]).transform.replace(/[^0-9\-.,]/g, '').split(',')[4])
    var moveLenAbs = Math.abs(this.state.moveLen)
    // console.log(this.state.moveLen, 'abc')
    let minLen = this.state.defaultMin * this.state.spanWid

    if (this.state.moveLen > -minLen) {
      e.target.querySelectorAll('ul.scale')[0].style.transform = 'translateX(' + -minLen + 'px)'
      this.setState({
        inputVale: this.state.defaultMin
      })
    } else if (Math.abs(this.state.moveLen) > $('.scale').width()) {
      e.target.querySelectorAll('ul.scale')[0].style.transform = 'translateX(' + -e.target.querySelectorAll('ul.scale')[0].clientWidth + 'px)'
    } else {
      if ((moveLenAbs % this.state.spanWid) !== 0) {
        if ((moveLenAbs % this.state.spanWid) > this.state.spanWid / 2) {
          this.state.moveLen = this.state.moveLen - (this.state.moveLen % this.state.spanWid) - this.state.spanWid
        } else {
          this.state.moveLen = this.state.moveLen - (this.state.moveLen % this.state.spanWid)
        }
        e.target.querySelectorAll('ul.scale')[0].style.transform = 'translateX(' + this.state.moveLen + 'px)'
      }
    }
  }

  componentDidMount () {
    let {defaultVal, min, onHandleClick, thisIndex, parentIndex} = this.props
    this.setState({
      defaultMin: min || 0
    })
    this.createDom(10)
    $('.scale-nav').css('transform', 'translateX(' + 152 + 'px)')
    this.state.spanWid = $('.scale li span').width()
    if (defaultVal) {
      let defaultUnit = -defaultVal * 7.5
      $('.scale-nav .sl0' + parentIndex).eq(thisIndex).css('transform', 'translateX(' + defaultUnit + 'px)')
      this.setState({
        inputVale: defaultVal
      })
      onHandleClick(defaultVal, thisIndex, parentIndex)
    }
  }

  render () {
    let {parentIndex, name, unit} = this.props
    return (
      <div className='contain'
        onTouchStart={this.touchStart.bind(this)}
        onTouchMove={this.touchMove.bind(this)}
        onTouchEnd={this.touchEnd.bind(this)}>
        <div className='conNum'>
          <span>{name}</span>
          <input type='text' className='choseNum' value={this.state.inputVale} />
          <span>{unit}</span>
        </div>
        <div className='scale-nav'>
          <ul className={'scale sl0' + parentIndex} />
        </div>
      </div>
    )
  }
}
