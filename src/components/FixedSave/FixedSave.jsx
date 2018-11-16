import React, {Component} from 'react'
import './FixedSave.css'

export default class FixedSave extends Component {
  render () {
    return (
      <div className='fixed'>
        <a className='save'>
          <img src={require('./save.png')} />
          <span>保存方案</span>
        </a>
        <a className='customized'>精准定制</a>
        <a className='consultation'>专家咨询</a>
      </div>
    )
  }
}
