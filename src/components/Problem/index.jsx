import React, { Component } from 'react'
import './index.css'

export default class Problem extends Component {
  render () {
    return (
      <a className='doubt'>
        <img src={require('./scheme11.png')} />
        <p>
          <span>得过疾病能买保险么？</span>
          <span>为什么重疾险要搭配医疗险组合购买？</span>
        </p>
      </a>
    )
  }
}
