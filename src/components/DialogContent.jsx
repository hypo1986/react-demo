import React, { Component } from 'react'
import './DialogContent.less'
import FixedContent from './page/FixedContent.jsx'

class DialogContent extends Component {
  componentWillMount () {
  }
  render () {
    let {children, type} = this.props
    return (
      <FixedContent>
        {type === 'left' && <div className='content content-left'>
          <div className='icon' />
          {children}
        </div>}
        {type === 'right' && <div className='content content-right'>
          <div className='icon' />
          {children}
        </div>}
      </FixedContent>
    )
  }
}
export default DialogContent
