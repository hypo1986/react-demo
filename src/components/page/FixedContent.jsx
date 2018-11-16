import React, { Component } from 'react'
class FixedContent extends Component {
  setFontSize () {
    let designedWidth = 750
    let actualWidth = Math.min(450, document.body.clientWidth)
    document.documentElement.style.fontSize = actualWidth * 100 / designedWidth + 'px'
  }
  componentWillMount () {
    // this.setFontSize()
  }
  componentDidMount () {
    // window.addEventListener('resize', this.setFontSize)
  }
  componentWillUnmount () {
    // window.removeEventListener('resize', this.setFontSize)
  }
  render () {
    var {className, children, style} = this.props
    return (
      <div ref='content' className={className} style={{...style || {}}}>
        {children}
      </div>
    )
  }
}
export default FixedContent
